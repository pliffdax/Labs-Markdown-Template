import { redirect, error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { config } from "$lib/site/config";
import { base } from "$app/paths";

export const load: PageLoad = async () => {
  const first = config.labs?.[0];
  if (!first?.slug) throw error(404, "No labs configured");

  throw redirect(302, `${base}/lab/${first.slug}`);
};
