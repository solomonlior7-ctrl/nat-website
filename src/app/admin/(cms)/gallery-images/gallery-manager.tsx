"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { addGalleryItem, deleteGalleryItem } from "./actions";

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

interface Props {
  siteId: string;
  initialItems: GalleryItem[];
}

export default function GalleryManager({ siteId, initialItems }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);
  const [uploadError, setUploadError] = useState("");
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

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) { setUploadError("Please select an image file."); return; }
    if (!ALLOWED_TYPES.includes(file.type)) { setUploadError("Invalid file type. Only jpg, png, webp, gif, avif are allowed."); return; }
    if (file.size > 10 * 1024 * 1024) { setUploadError("File is too large. Maximum size is 10 MB."); return; }
    if (!newTitle.trim()) { setUploadError("Please enter a title."); return; }
    if (!siteId) { setUploadError("Site not configured."); return; }

    setUploadError("");
    setUploading(true);

    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop();
      const path = `${siteId}/gallery/${Date.now()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("site-media")
        .upload(path, file, { cacheControl: "3600", upsert: false });

      if (uploadErr) {
        setUploadError("Upload failed: " + uploadErr.message);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from("site-media")
        .getPublicUrl(path);

      const result = await addGalleryItem({
        siteId,
        title: newTitle.trim(),
        category: newCategory,
        imageUrl: publicUrl,
        storagePath: path,
        sortOrder: items.length,
      });

      if (result?.error) {
        setUploadError("Save failed: " + result.error);
        return;
      }

      await refreshItems();
      setNewTitle("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setUploadError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
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

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-slate-800 mb-5">Add New Photo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Project Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Enterprise Network Cabinet"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Category</label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-slate-600 mb-2">Photo File</label>
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-sm text-slate-700 transition-colors">
              Choose File
            </span>
            <span className="text-sm text-slate-500" id="file-name">
              {fileInputRef.current?.files?.[0]?.name ?? "No file chosen"}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const label = document.getElementById("file-name");
                if (label) label.textContent = e.target.files?.[0]?.name ?? "No file chosen";
              }}
            />
          </label>
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
        >
          {uploading ? "Uploading…" : "Upload Photo"}
        </button>

        {uploadError && (
          <p className="text-red-500 text-sm mt-3">{uploadError}</p>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
          <div className="text-5xl mb-4">📷</div>
          <p className="font-medium">No photos yet</p>
          <p className="text-sm mt-1">Upload your first project photo above</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  disabled={deleting === item.id}
                  className="text-red-400 hover:text-red-600 text-sm transition-colors ml-2 shrink-0 disabled:opacity-50"
                >
                  {deleting === item.id ? "…" : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
