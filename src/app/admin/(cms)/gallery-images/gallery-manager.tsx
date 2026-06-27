"use client";

import { useState, useRef, useTransition } from "react";
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
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);
  const [uploadError, setUploadError] = useState("");
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) { setUploadError("Please select an image file."); return; }
    if (!newTitle.trim()) { setUploadError("Please enter a title."); return; }
    setUploadError("");
    setUploading(true);

    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const path = `${siteId}/gallery/${Date.now()}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from("site-media")
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (uploadErr) {
      setUploadError("Upload failed: " + uploadErr.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from("site-media")
      .getPublicUrl(path);

    startTransition(async () => {
      await addGalleryItem({
        siteId,
        title: newTitle.trim(),
        category: newCategory,
        imageUrl: publicUrl,
        storagePath: path,
        sortOrder: items.length,
      });
    });

    const { data: updated } = await supabase
      .from("gallery_items")
      .select("*")
      .eq("site_id", siteId)
      .order("sort_order");

    setItems(updated ?? []);
    setNewTitle("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setUploading(false);
  };

  const handleDelete = async (item: GalleryItem) => {
    if (!confirm(`Delete "${item.title}"?`)) return;

    const supabase = createClient();
    if (item.storage_path) {
      await supabase.storage.from("site-media").remove([item.storage_path]);
    }

    startTransition(async () => {
      await deleteGalleryItem(item.id);
    });

    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="space-y-8">
      {/* Upload panel */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-slate-800 mb-5">Add New Photo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Project Title
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Enterprise Network Cabinet"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Category
            </label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="text-sm text-slate-600 flex-1"
          />
          <button
            onClick={handleUpload}
            disabled={uploading || isPending}
            className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {uploading ? "Uploading…" : "Upload Photo"}
          </button>
        </div>

        {uploadError && (
          <p className="text-red-500 text-sm mt-3">{uploadError}</p>
        )}
      </div>

      {/* Gallery grid */}
      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
          <div className="text-5xl mb-4">📷</div>
          <p className="font-medium">No photos yet</p>
          <p className="text-sm mt-1">Upload your first project photo above</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
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
              <div className="p-4 flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-800 text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.category}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-400 hover:text-red-600 text-sm transition-colors ml-2 shrink-0"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
