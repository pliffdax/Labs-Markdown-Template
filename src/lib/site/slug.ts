export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\p{L}\p{N}\-]+/gu, '')
    .replace(/\-+/g, '-');
}
