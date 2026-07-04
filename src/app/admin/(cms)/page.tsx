import Link from "next/link";
import { CONTENT_SCHEMA } from "@/lib/content-schema";

export default function AdminDashboard() {
  const pages = Object.entries(CONTENT_SCHEMA);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Content Manager</h1>
        <p className="font-sans text-ink-muted mt-1">
          Select a section to edit its content
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map(([pageKey, schema]) => (
          <Link
            key={pageKey}
            href={`/admin/edit/${pageKey}`}
            className="glass-card rounded-xl p-6 hover:shadow-md transition-all hover:border-accent group"
          >
            <div className="text-3xl mb-3">{schema.icon}</div>
            <h2 className="font-semibold text-ink group-hover:text-accent transition-colors">
              {schema.title}
            </h2>
            <p className="font-sans text-ink-muted text-sm mt-1">
              {Object.keys(schema.fields).length} editable fields
            </p>
          </Link>
        ))}

        <Link
          href="/admin/gallery-images"
          className="glass-card rounded-xl p-6 hover:shadow-md transition-all hover:border-accent group"
        >
          <div className="text-3xl mb-3">📸</div>
          <h2 className="font-semibold text-ink group-hover:text-accent transition-colors">
            Gallery Images
          </h2>
          <p className="font-sans text-ink-muted text-sm mt-1">
            Upload and manage project photos
          </p>
        </Link>

        <Link
          href="/admin/client-logos"
          className="glass-card rounded-xl p-6 hover:shadow-md transition-all hover:border-accent group"
        >
          <div className="text-3xl mb-3">🏢</div>
          <h2 className="font-semibold text-ink group-hover:text-accent transition-colors">
            Client Logos
          </h2>
          <p className="font-sans text-ink-muted text-sm mt-1">
            Upload and manage client logos on the Clients page
          </p>
        </Link>
      </div>
    </div>
  );
}
