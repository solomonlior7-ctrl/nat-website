"use client";

import { useState, useTransition, useRef } from "react";
import Image from "next/image";
import type { PageSchema } from "@/lib/content-schema";
import { savePageContent } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

interface Props {
  page: string;
  schema: PageSchema;
  currentContent: Record<string, string>;
}

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

function ImageUploadField({
  fieldKey,
  label,
  value,
  onChange,
}: {
  fieldKey: string;
  label: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Invalid file type. Use jpg, png, webp, gif, or avif.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File too large. Maximum 5 MB.");
      return;
    }

    setUploading(true);
    const supabase = createClient();
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `team/${fieldKey}-${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("site-media")
      .upload(path, file, { upsert: true });

    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("site-media").getPublicUrl(path);
    onChange(data.publicUrl);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = () => {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="p-6 border-b border-slate-100">
      <label className="block text-sm font-semibold text-slate-700 mb-3">{label}</label>
      <div className="flex items-start gap-5">
        {/* Preview */}
        <div
          className="w-24 h-24 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
          style={{ background: "#f1f5f9", border: "1px solid #e2e8f0" }}
        >
          {value ? (
            <Image
              src={value}
              alt="Preview"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>

        {/* Controls */}
        <div className="flex-1">
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
            onChange={handleUpload}
            className="hidden"
            id={`upload-${fieldKey}`}
          />
          <div className="flex flex-wrap gap-2 mb-2">
            <label
              htmlFor={`upload-${fieldKey}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                uploading
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-accent text-white hover:bg-accent-dark"
              }`}
            >
              {uploading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Uploading…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  {value ? "Replace Photo" : "Upload Photo"}
                </>
              )}
            </label>
            {value && (
              <button
                onClick={handleRemove}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors border border-red-200"
              >
                Remove
              </button>
            )}
          </div>
          <p className="text-xs text-slate-400">JPG, PNG, WebP, GIF or AVIF — max 5 MB</p>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default function PageEditor({ page, schema, currentContent }: Props) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(
      Object.entries(schema.fields).map(([key, f]) => [
        key,
        currentContent[key] ?? f.defaultValue,
      ])
    )
  );
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    startTransition(async () => {
      await savePageContent(page, values);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
        {Object.entries(schema.fields).map(([key, field]) => {
          if (field.type === "image") {
            return (
              <ImageUploadField
                key={key}
                fieldKey={key}
                label={field.label}
                value={values[key] ?? ""}
                onChange={(url) => setValues((v) => ({ ...v, [key]: url }))}
              />
            );
          }

          return (
            <div key={key} className="p-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  value={values[key]}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [key]: e.target.value }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none resize-none transition-colors"
                />
              ) : (
                <input
                  type="text"
                  value={values[key]}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [key]: e.target.value }))
                  }
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 focus:border-accent focus:outline-none transition-colors"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={isPending}
          className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
        >
          {isPending ? "Saving…" : "Save Changes"}
        </button>

        {saved && (
          <span className="text-green-600 font-medium text-sm">
            ✓ Saved successfully
          </span>
        )}

        <Link href="/admin" className="text-slate-400 hover:text-slate-600 text-sm ml-auto">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
