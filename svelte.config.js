import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import { rehypeKitPaths } from "./rehype.kit-paths.js";

const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [rehypeKitPaths],
    }),
  ],
  kit: {
    adapter: adapter({ fallback: "404.html" }),
    prerender: { entries: ["*"] },
    paths: {
      base:
        process.env.NODE_ENV === "production" ? "/Labs-Markdown-Template" : "",
    },
  },
};

export default config;
