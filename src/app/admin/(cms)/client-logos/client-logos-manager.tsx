"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { addClientLogo, deleteClientLogo, updateClientLogo } from "./actions";

export interface ClientLogo {
  id: string;
  name: string;
  website_url: string | null;
  sector: string | null;
  logo_url: string;
  storage_path: string | null;
  sort_order: number;
}

const SECTORS = [
  "",
  "Construction & Engineering",
  "Real Estate & Smart Homes",
  "Fuel & Fleet",
  "Retail & Commercial",
  "Corporate Offices",
  "Security-Sensitive",
  "Other",
];

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "image/svg+xml"];

interface Props {
  siteId: string;
  initialItems: ClientLogo[];
}

export default function ClientLogosManager({ siteId, initialItems }: Props) {
  const [items, setItems] = useState<ClientLogo[]>(initialItems);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [newName, setNewName] = useState("");
  const [newWebsite, setNewWebsite] = useState("");
  const [newSector, setNewSector] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{ name: string; website_url: string; sector: string }>({ name: "", website_url: "", sector: "" });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("client_logos")
      .select("*")
      .eq("site_id", siteId)
      .order("sort_order", { ascending: true });
    setItems(data ?? []);
  };

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) { setError("Please select a logo file."); return; }
    if (!ALLOWED_TYPES.includes(file.type)) { setError("Invalid file type. Use jpg, png, webp, gif, avif, or svg."); return; }
    if (file.size > 5 * 1024 * 1024) { setError("File too large. Max 5 MB."); return; }
    if (!newName.trim()) { setError("Please enter the client name."); return; }

    setError("");
    setUploading(true);

    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop() ?? "png";
      const path = `${siteId}/clients/${Date.now()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("site-media")
        .upload(path, file, { cacheControl: "3600", upsert: false });

      if (uploadErr) { setError("Upload failed: " + uploadErr.message); return; }

      const { data: { publicUrl } } = supabase.storage.from("site-media").getPublicUrl(path);

      const result = await addClientLogo({
        name: newName.trim(),
        websiteUrl: newWebsite.trim(),
        sector: newSector,
        logoUrl: publicUrl,
        storagePath: path,
        sortOrder: items.length,
      });

      if (result?.error) { setError("Save failed: " + result.error); return; }

      await refresh();
      setNewName("");
      setNewWebsite("");
      setNewSector("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (item: ClientLogo) => {
    setEditingId(item.id);
    setEditValues({ name: item.name, website_url: item.website_url ?? "", sector: item.sector ?? "" });
  };

  const saveEdit = async (id: string) => {
    setSavingId(id);
    await updateClientLogo(id, {
      name: editValues.name.trim() || "Client",
      website_url: editValues.website_url.trim() || undefined,
      sector: editValues.sector || undefined,
    });
    setEditingId(null);
    setSavingId(null);
    await refresh();
  };

  const handleDelete = async (item: ClientLogo) => {
    if (!confirm(`Delete "${item.name}"?`)) return;
    setDeletingId(item.id);
    await deleteClientLogo(item.id, item.storage_path);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    setDeletingId(null);
  };

  const moveItem = async (item: ClientLogo, dir: -1 | 1) => {
    const idx = items.findIndex((i) => i.id === item.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= items.length) return;

    const updated = [...items];
    [updated[idx], updated[swapIdx]] = [updated[swapIdx], updated[idx]];

    // update sort_order for both
    await updateClientLogo(updated[idx].id, { sort_order: idx });
    await updateClientLogo(updated[swapIdx].id, { sort_order: swapIdx });

    setItems(updated.map((item, i) => ({ ...item, sort_order: i })));
  };

  return (
    <div className="space-y-8">
      {/* Upload Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-slate-800 mb-5">Add Client Logo</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Client Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. Acme Construction"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Website URL (optional)</label>
            <input
              type="url"
              value={newWebsite}
              onChange={(e) => setNewWebsite(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Sector (optional)</label>
            <select
              value={newSector}
              onChange={(e) => setNewSector(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none bg-white"
            >
              {SECTORS.map((s) => (
                <option key={s} value={s}>{s || "— Select sector —"}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-slate-600 mb-2">Logo File <span className="text-red-400">*</span></label>
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-sm text-slate-700 transition-colors">
              Choose File
            </span>
            <span className="text-sm text-slate-500" id="logo-file-name">No file chosen</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif,image/avif,image/svg+xml"
              className="hidden"
              onChange={(e) => {
                const label = document.getElementById("logo-file-name");
                if (label) label.textContent = e.target.files?.[0]?.name ?? "No file chosen";
              }}
            />
          </label>
          <p className="text-xs text-slate-400 mt-1">JPG, PNG, WebP, GIF, AVIF or SVG — max 5 MB. Transparent PNG or SVG recommended for best results.</p>
        </div>

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
        >
          {uploading ? "Uploading…" : "Add Client Logo"}
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>

      {/* Logo Grid */}
      {items.length === 0 ? (
        <div className="text-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
          <div className="text-5xl mb-4">🏢</div>
          <p className="font-medium">No client logos yet</p>
          <p className="text-sm mt-1">Upload your first client logo above</p>
        </div>
      ) : (
        <div>
          <p className="text-sm text-slate-500 mb-4">{items.length} client{items.length !== 1 ? "s" : ""} — drag order using the arrows</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200"
              >
                {/* Logo preview */}
                <div className="h-32 flex items-center justify-center p-4 bg-slate-50 relative">
                  <Image
                    src={item.logo_url}
                    alt={item.name}
                    width={160}
                    height={80}
                    className="max-h-20 max-w-full object-contain"
                  />
                  {/* Move buttons */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button
                      onClick={() => moveItem(item, -1)}
                      disabled={idx === 0}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-700 disabled:opacity-30 transition-colors text-xs"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveItem(item, 1)}
                      disabled={idx === items.length - 1}
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-700 disabled:opacity-30 transition-colors text-xs"
                      title="Move down"
                    >
                      ↓
                    </button>
                  </div>
                </div>

                {/* Details / Edit */}
                <div className="p-4">
                  {editingId === item.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editValues.name}
                        onChange={(e) => setEditValues((v) => ({ ...v, name: e.target.value }))}
                        placeholder="Client name"
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:border-accent focus:outline-none"
                      />
                      <input
                        type="url"
                        value={editValues.website_url}
                        onChange={(e) => setEditValues((v) => ({ ...v, website_url: e.target.value }))}
                        placeholder="https://..."
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:border-accent focus:outline-none"
                      />
                      <select
                        value={editValues.sector}
                        onChange={(e) => setEditValues((v) => ({ ...v, sector: e.target.value }))}
                        className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:border-accent focus:outline-none bg-white"
                      >
                        {SECTORS.map((s) => (
                          <option key={s} value={s}>{s || "— No sector —"}</option>
                        ))}
                      </select>
                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => saveEdit(item.id)}
                          disabled={savingId === item.id}
                          className="px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-lg disabled:opacity-60"
                        >
                          {savingId === item.id ? "Saving…" : "Save"}
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-4 py-1.5 border border-slate-200 text-slate-500 text-sm rounded-lg hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 text-sm truncate">{item.name}</p>
                        {item.sector && (
                          <p className="text-xs text-slate-400 mt-0.5">{item.sector}</p>
                        )}
                        {item.website_url && (
                          <a
                            href={item.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent hover:underline truncate block mt-0.5"
                          >
                            {item.website_url.replace(/^https?:\/\//, "")}
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => startEdit(item)}
                          className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-accent border border-slate-200 rounded-lg transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item)}
                          disabled={deletingId === item.id}
                          className="px-3 py-1 text-xs font-medium text-red-400 hover:text-red-600 border border-red-100 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {deletingId === item.id ? "…" : "Delete"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
