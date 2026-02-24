import { visit } from "unist-util-visit";
import { BASE_PATH } from "./base-path.js";

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
  if (BASE_PATH && normalized.startsWith(`${BASE_PATH}/`)) return normalized;

  return `${BASE_PATH}${normalized}`;
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
