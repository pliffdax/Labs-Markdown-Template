import { visit } from "unist-util-visit";

const BASE =
  process.env.NODE_ENV === "production" ? "/Labs-Markdown-Template" : "";

function isExternal(url) {
  return (
    /^(https?:)?\/\//.test(url) ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  );
}

function withBase(url) {
  if (!url || isExternal(url)) return url;

  // normalize "assets/..." => "/assets/..."
  const normalized = url.startsWith("/") ? url : `/${url}`;

  // already has base
  if (BASE && normalized.startsWith(`${BASE}/`)) return normalized;

  return `${BASE}${normalized}`;
}

export function rehypeKitPaths() {
  return (tree) => {
    visit(tree, "element", (node) => {
      const props = node.properties || {};

      if (node.tagName === "img" && typeof props.src === "string") {
        props.src = withBase(props.src);
      }

      if (node.tagName === "a" && typeof props.href === "string") {
        props.href = withBase(props.href);
      }

      node.properties = props;
    });
  };
}
