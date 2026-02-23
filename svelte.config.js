import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extensions: [".md"],
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
