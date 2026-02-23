import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { config } from "$lib/site/config";

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const lab = config.labs.find((l) => l.slug === slug);
  if (!lab) throw error(404, "Lab not found");

  const modules = import.meta.glob("/content/labs/*.md");
  const importer = modules[`/content/labs/${slug}.md`];
  if (!importer) throw error(404, `Markdown not found: ${slug}.md`);

  const mod = (await importer()) as { default: unknown };

  return {
    lab,
    Component: mod.default,
  };
};
