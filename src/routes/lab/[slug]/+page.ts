import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { config } from "$lib/site/config";

const modules = import.meta.glob("/content/labs/*.md");

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const lab = config.labs.find((l) => l.slug === slug);
  if (!lab) throw error(404, "Lab not found");

  const filePath = `/content/labs/${slug}.md`;
  const importer = modules[filePath];
  if (!importer) throw error(404, "Markdown file not found");

  const mod = (await importer()) as { default: unknown };
  return { lab, Component: mod.default };
};
