import { notFound } from "next/navigation";
import { CONTENT_SCHEMA } from "@/lib/content-schema";
import { getPageContent } from "@/lib/get-content";
import PageEditor from "./page-editor";

interface Props {
  params: Promise<{ page: string }>;
}

export default async function EditPage({ params }: Props) {
  const { page } = await params;
  const schema = CONTENT_SCHEMA[page];
  if (!schema) notFound();

  const currentContent = await getPageContent(page);

  return (
    <div>
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-1">
          <a href="/admin" className="hover:text-accent">
            Dashboard
          </a>{" "}
          / {schema.title}
        </p>
        <h1 className="text-2xl font-bold text-slate-800">{schema.title}</h1>
        <p className="text-slate-500 mt-1">
          Edit the content below and click Save Changes.
        </p>
      </div>
      <PageEditor page={page} schema={schema} currentContent={currentContent} />
    </div>
  );
}
