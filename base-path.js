export const BASE_PATH =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/Labs-Markdown-Template" : "");
