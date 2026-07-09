"use client";

import { useState, useRef, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { addGalleryItem, deleteGalleryItem, updateGalleryItem } from "./actions";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  storage_path: string | null;
  sort_order: number;
}

const CATEGORIES = [
  "Infrastructure",
  "Low Voltage",
  "Security",
  "Smart Homes",
  "Fuel Management",
];

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

interface QueueItem {
  id: string;
  file: File;
  title: string;
  category: string;
  previewUrl: string;
  status: "pending" | "uploading" | "done" | "error";
  error?: string;
}

function fileToTitle(name: string): string {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[_\-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

interface Props {
  siteId: string;
  initialItems: GalleryItem[];
}

export default function GalleryManager({ siteId, initialItems }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshItems = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("gallery_items")
      .select("*")
      .eq("site_id", siteId)
      .order("sort_order", { ascending: true });
    setItems(data ?? []);
  };

  const addFilesToQueue = useCallback((files: FileList | File[]) => {
    const valid = Array.from(files).filter(
      (f) => ALLOWED_TYPES.includes(f.type) && f.size <= 10 * 1024 * 1024
    );
    const newItems: QueueItem[] = valid.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      file,
      title: fileToTitle(file.name),
      category: CATEGORIES[0],
      previewUrl: URL.createObjectURL(file),
      status: "pending",
    }));
    setQueue((prev) => [...prev, ...newItems]);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      addFilesToQueue(e.dataTransfer.files);
    },
    [addFilesToQueue]
  );

  const removeFromQueue = (id: string) => {
    setQueue((prev) => {
      const item = prev.find((q) => q.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((q) => q.id !== id);
    });
  };

  const clearQueue = () => {
    setQueue((prev) => {
      prev.forEach((q) => URL.revokeObjectURL(q.previewUrl));
      return [];
    });
  };

  const updateQueueItem = (id: string, patch: Partial<QueueItem>) => {
    setQueue((prev) => prev.map((q) => (q.id === id ? { ...q, ...patch } : q)));
  };

  const handleUploadAll = async () => {
    const pending = queue.filter((q) => q.status === "pending");
    if (!pending.length || !siteId) return;
    setUploading(true);

    for (const item of pending) {
      updateQueueItem(item.id, { status: "uploading" });
      try {
        const supabase = createClient();
        const ext = item.file.name.split(".").pop();
        const path = `${siteId}/gallery/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { error: uploadErr } = await supabase.storage
          .from("site-media")
          .upload(path, item.file, { cacheControl: "3600", upsert: false });

        if (uploadErr) {
          updateQueueItem(item.id, { status: "error", error: uploadErr.message });
          continue;
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("site-media").getPublicUrl(path);

        const result = await addGalleryItem({
          siteId,
          title: item.title.trim() || fileToTitle(item.file.name),
          category: item.category,
          imageUrl: publicUrl,
          storagePath: path,
          sortOrder: items.length,
        });

        if (result?.error) {
          updateQueueItem(item.id, { status: "error", error: result.error });
        } else {
          updateQueueItem(item.id, { status: "done" });
          URL.revokeObjectURL(item.previewUrl);
        }
      } catch {
        updateQueueItem(item.id, { status: "error", error: "Unexpected error. Please try again." });
      }
    }

    await refreshItems();
    setQueue((prev) => prev.filter((q) => q.status !== "done"));
    setUploading(false);
  };

  const startEdit = (item: GalleryItem) => {
    setEditing(item.id);
    setEditTitle(item.title);
    setEditCategory(item.category);
  };

  const cancelEdit = () => {
    setEditing(null);
    setEditTitle("");
    setEditCategory("");
  };

  const handleSaveEdit = async (id: string) => {
    if (!editTitle.trim()) return;
    setSaving(true);
    const result = await updateGalleryItem({ id, title: editTitle.trim(), category: editCategory });
    if (!result?.error) {
      setItems((prev) =>
        prev.map((i) => i.id === id ? { ...i, title: editTitle.trim(), category: editCategory } : i)
      );
      cancelEdit();
    }
    setSaving(false);
  };

  const handleDelete = async (item: GalleryItem) => {
    if (!confirm(`Delete "${item.title}"?`)) return;
    setDeleting(item.id);
    try {
      const supabase = createClient();
      if (item.storage_path) {
        await supabase.storage.from("site-media").remove([item.storage_path]);
      }
      await deleteGalleryItem(item.id);
      setItems((prev) => prev.filter((i) => i.id !== item.id));
    } finally {
      setDeleting(null);
    }
  };

  const pendingCount = queue.filter((q) => q.status === "pending").length;

  return (
    <div className="space-y-8">
      {/* Drop zone */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-slate-800 mb-5">Upload Photos</h2>
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors select-none ${
            isDragging
              ? "border-accent bg-blue-50"
              : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-3 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-700 text-base">
                {isDragging ? "Drop photos here" : "Drag & drop photos here, or click to browse"}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                JPG, PNG, WebP, GIF, AVIF · Max 10 MB each · Multiple files supported
              </p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFilesToQueue(e.target.files)}
          />
        </div>
      </div>

      {/* Upload queue */}
      {queue.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-slate-800">
              Ready to Upload
              <span className="ml-2 text-sm font-normal text-slate-400">
                ({pendingCount} photo{pendingCount !== 1 ? "s" : ""})
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={clearQueue}
                disabled={uploading}
                className="text-sm text-slate-400 hover:text-red-500 transition-colors disabled:opacity-40"
              >
                Clear all
              </button>
              <button
                onClick={handleUploadAll}
                disabled={uploading || pendingCount === 0}
                className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-60"
              >
                {uploading
                  ? "Uploading…"
                  : `Upload ${pendingCount} photo${pendingCount !== 1 ? "s" : ""}`}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {queue.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl border overflow-hidden transition-colors ${
                  item.status === "done"
                    ? "border-green-200 bg-green-50"
                    : item.status === "error"
                    ? "border-red-200 bg-red-50"
                    : item.status === "uploading"
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {/* Preview image */}
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={item.previewUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.status === "uploading" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  {item.status === "done" && (
                    <div className="absolute inset-0 bg-green-500/25 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {item.status === "pending" && (
                    <button
                      onClick={() => removeFromQueue(item.id)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 hover:bg-red-500 text-white flex items-center justify-center text-xs transition-colors"
                      title="Remove"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Title + category */}
                <div className="p-3 space-y-2">
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateQueueItem(item.id, { title: e.target.value })}
                    disabled={item.status !== "pending"}
                    placeholder="Title"
                    className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white disabled:opacity-60"
                  />
                  <select
                    value={item.category}
                    onChange={(e) => updateQueueItem(item.id, { category: e.target.value })}
                    disabled={item.status !== "pending"}
                    className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white disabled:opacity-60"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {item.status === "error" && (
                    <p className="text-xs text-red-500">{item.error}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Uploaded gallery */}
      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
          <div className="text-5xl mb-4">📷</div>
          <p className="font-medium">No photos yet</p>
          <p className="text-sm mt-1">Upload your first project photo above</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const isEditing = editing === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {isEditing ? (
                  <div className="p-4 space-y-2">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Title"
                      className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none"
                      autoFocus
                    />
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => handleSaveEdit(item.id)}
                        disabled={saving || !editTitle.trim()}
                        className="flex-1 py-1.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-60"
                      >
                        {saving ? "Saving…" : "Save"}
                      </button>
                      <button
                        onClick={cancelEdit}
                        disabled={saving}
                        className="flex-1 py-1.5 border border-slate-200 text-slate-500 hover:text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-800 text-sm truncate">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2 shrink-0">
                      <button
                        onClick={() => startEdit(item)}
                        className="text-slate-400 hover:text-accent text-sm transition-colors"
                        title="Edit"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        disabled={deleting === item.id}
                        className="text-red-400 hover:text-red-600 text-sm transition-colors disabled:opacity-50"
                      >
                        {deleting === item.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
