"use client";

import { useState, useTransition } from "react";
import type { PageSchema } from "@/lib/content-schema";
import { savePageContent } from "@/app/admin/actions";
import Link from "next/link";

interface Props {
  page: string;
  schema: PageSchema;
  currentContent: Record<string, string>;
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
        {Object.entries(schema.fields).map(([key, field]) => (
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
        ))}
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
