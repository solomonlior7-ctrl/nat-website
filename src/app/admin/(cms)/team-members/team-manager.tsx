"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { addTeamMember, deleteTeamMember, updateTeamMember } from "./actions";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string;
  photo_url: string;
  photo_storage_path: string | null;
  sort_order: number;
}

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

interface Props {
  siteId: string;
  initialMembers: TeamMember[];
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type EditValues = { name: string; role: string; bio: string; expertise: string };

export default function TeamManager({ siteId, initialMembers }: Props) {
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newExpertise, setNewExpertise] = useState("");
  const newFileRef = useRef<HTMLInputElement>(null);

  const [editValues, setEditValues] = useState<EditValues>({ name: "", role: "", bio: "", expertise: "" });
  const editFileRef = useRef<HTMLInputElement>(null);

  const refresh = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .eq("site_id", siteId)
      .order("sort_order", { ascending: true });
    setMembers(data ?? []);
  };

  const uploadPhoto = async (file: File, slug: string): Promise<{ url: string; path: string } | null> => {
    if (!ALLOWED_TYPES.includes(file.type)) { setError("Invalid file type. Use jpg, png, webp or avif."); return null; }
    if (file.size > 5 * 1024 * 1024) { setError("File too large. Max 5 MB."); return null; }
    const supabase = createClient();
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${siteId}/team/${Date.now()}-${slug}.${ext}`;
    const { error: uploadErr } = await supabase.storage.from("site-media").upload(path, file, { cacheControl: "3600", upsert: false });
    if (uploadErr) { setError("Upload failed: " + uploadErr.message); return null; }
    const { data: { publicUrl } } = supabase.storage.from("site-media").getPublicUrl(path);
    return { url: publicUrl, path };
  };

  const handleAdd = async () => {
    if (!newName.trim()) { setError("Name is required."); return; }
    if (!newRole.trim()) { setError("Role / title is required."); return; }
    setError("");
    setUploading(true);
    try {
      let photoUrl = "";
      let photoStoragePath = "";
      const file = newFileRef.current?.files?.[0];
      if (file) {
        const uploaded = await uploadPhoto(file, newName.trim().replace(/\s+/g, "-").toLowerCase());
        if (!uploaded) return;
        photoUrl = uploaded.url;
        photoStoragePath = uploaded.path;
      }
      const result = await addTeamMember({
        name: newName.trim(), role: newRole.trim(), bio: newBio.trim(),
        expertise: newExpertise.trim(), photoUrl, photoStoragePath,
        sortOrder: members.length,
      });
      if (result?.error) { setError("Save failed: " + result.error); return; }
      await refresh();
      setNewName(""); setNewRole(""); setNewBio(""); setNewExpertise("");
      if (newFileRef.current) newFileRef.current.value = "";
      setShowAddForm(false);
    } finally {
      setUploading(false);
    }
  };

  const startEdit = (m: TeamMember) => {
    setEditingId(m.id);
    setEditValues({ name: m.name, role: m.role, bio: m.bio, expertise: m.expertise });
  };

  const saveEdit = async (m: TeamMember) => {
    setSavingId(m.id);
    try {
      let photoUrl = m.photo_url;
      let photoStoragePath: string | null = m.photo_storage_path;
      const file = editFileRef.current?.files?.[0];
      if (file) {
        const uploaded = await uploadPhoto(file, editValues.name.replace(/\s+/g, "-").toLowerCase());
        if (!uploaded) return;
        if (m.photo_storage_path) {
          const supabase = createClient();
          await supabase.storage.from("site-media").remove([m.photo_storage_path]);
        }
        photoUrl = uploaded.url;
        photoStoragePath = uploaded.path;
      }
      await updateTeamMember(m.id, {
        name: editValues.name.trim() || "Team Member",
        role: editValues.role.trim(),
        bio: editValues.bio.trim(),
        expertise: editValues.expertise.trim(),
        photo_url: photoUrl,
        photo_storage_path: photoStoragePath,
      });
      setEditingId(null);
      if (editFileRef.current) editFileRef.current.value = "";
      await refresh();
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (m: TeamMember) => {
    if (!confirm(`Delete "${m.name}"?`)) return;
    setDeletingId(m.id);
    await deleteTeamMember(m.id, m.photo_storage_path);
    setMembers(prev => prev.filter(i => i.id !== m.id));
    setDeletingId(null);
  };

  const moveItem = async (m: TeamMember, dir: -1 | 1) => {
    const idx = members.findIndex(i => i.id === m.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= members.length) return;
    const updated = [...members];
    [updated[idx], updated[swapIdx]] = [updated[swapIdx], updated[idx]];
    await updateTeamMember(updated[idx].id, { sort_order: idx });
    await updateTeamMember(updated[swapIdx].id, { sort_order: swapIdx });
    setMembers(updated.map((item, i) => ({ ...item, sort_order: i })));
  };

  const inputCls = "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:border-accent focus:outline-none";

  return (
    <div className="space-y-6">
      {/* Add button / form */}
      {!showAddForm ? (
        <button onClick={() => setShowAddForm(true)} className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-sm">
          + Add Team Member
        </button>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-slate-800 mb-5">New Team Member</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name <span className="text-red-400">*</span></label>
              <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Full name" className={inputCls} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Role / Title <span className="text-red-400">*</span></label>
              <input type="text" value={newRole} onChange={e => setNewRole(e.target.value)} placeholder="e.g. Infrastructure Specialist" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Bio</label>
              <textarea value={newBio} onChange={e => setNewBio(e.target.value)} placeholder="Short bio..." rows={3} className={inputCls + " resize-none"} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Expertise (comma-separated)</label>
              <input type="text" value={newExpertise} onChange={e => setNewExpertise(e.target.value)} placeholder="e.g. Network Design, Cloud, Cabling" className={inputCls} />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Photo (optional)</label>
              <input ref={newFileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif"
                className="w-full text-sm text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-sm file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200" />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleAdd} disabled={uploading} className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60 text-sm">
              {uploading ? "Saving…" : "Add Member"}
            </button>
            <button onClick={() => { setShowAddForm(false); setError(""); }} className="px-5 py-2.5 border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-50 text-sm">
              Cancel
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </div>
      )}

      {/* Members list */}
      {members.length === 0 ? (
        <div className="text-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
          <div className="text-5xl mb-4">👤</div>
          <p className="font-medium">No team members yet</p>
          <p className="text-sm mt-1">Add your first team member above</p>
        </div>
      ) : (
        <div>
          <p className="text-sm text-slate-500 mb-4">{members.length} team member{members.length !== 1 ? "s" : ""} — use arrows to reorder</p>
          <div className="space-y-3">
            {members.map((m, idx) => (
              <div key={m.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {editingId === m.id ? (
                  <div className="p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Name</label>
                        <input type="text" value={editValues.name} onChange={e => setEditValues(v => ({ ...v, name: e.target.value }))} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Role / Title</label>
                        <input type="text" value={editValues.role} onChange={e => setEditValues(v => ({ ...v, role: e.target.value }))} className={inputCls} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs text-slate-500 mb-1">Bio</label>
                        <textarea value={editValues.bio} onChange={e => setEditValues(v => ({ ...v, bio: e.target.value }))} rows={3} className={inputCls + " resize-none"} />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Expertise (comma-separated)</label>
                        <input type="text" value={editValues.expertise} onChange={e => setEditValues(v => ({ ...v, expertise: e.target.value }))} className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Replace Photo</label>
                        <input ref={editFileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif"
                          className="w-full text-xs text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-slate-100 file:text-slate-700" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => saveEdit(m)} disabled={savingId === m.id} className="px-4 py-1.5 bg-accent text-white text-sm font-semibold rounded-lg disabled:opacity-60">
                        {savingId === m.id ? "Saving…" : "Save"}
                      </button>
                      <button onClick={() => setEditingId(null)} className="px-4 py-1.5 border border-slate-200 text-slate-500 text-sm rounded-lg hover:bg-slate-50">
                        Cancel
                      </button>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden border border-slate-200">
                      {m.photo_url ? (
                        <Image src={m.photo_url} alt={m.name} width={56} height={56} className="object-cover w-full h-full" />
                      ) : (
                        <span className="text-slate-400 font-bold text-lg">{initials(m.name)}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 truncate">{m.name}</p>
                      <p className="text-xs text-accent font-medium truncate">{m.role}</p>
                      {m.expertise && <p className="text-xs text-slate-400 mt-0.5 truncate">{m.expertise}</p>}
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => moveItem(m, -1)} disabled={idx === 0} className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">↑</button>
                      <button onClick={() => moveItem(m, 1)} disabled={idx === members.length - 1} className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">↓</button>
                      <button onClick={() => startEdit(m)} className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-accent border border-slate-200 rounded-lg transition-colors ml-1">Edit</button>
                      <button onClick={() => handleDelete(m)} disabled={deletingId === m.id} className="px-3 py-1 text-xs font-medium text-red-400 hover:text-red-600 border border-red-100 rounded-lg transition-colors disabled:opacity-50">
                        {deletingId === m.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
