import { slugify } from './slug';

export type TocItem = {
  id: string;
  text: string;
  depth: number;
};

export function buildToc(root: HTMLElement, minDepth: number, maxDepth: number): TocItem[] {
  const headings = Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[];

  const items: TocItem[] = [];
  const used = new Map<string, number>();

  for (const h of headings) {
    const depth = Number(h.tagName.substring(1));
    if (depth < minDepth || depth > maxDepth) continue;

    const text = (h.textContent ?? '').trim();
    if (!text) continue;

    let id = h.id?.trim();
    if (!id) id = slugify(text);

    const count = used.get(id) ?? 0;
    used.set(id, count + 1);
    if (count > 0) id = `${id}-${count + 1}`;

    h.id = id;
    items.push({ id, text, depth });
  }

  return items;
}
