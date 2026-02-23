export function setupScrollSpy(root: HTMLElement, onActiveId: (id: string) => void): () => void {
  const headings = Array.from(root.querySelectorAll('h2, h3, h4, h5, h6')) as HTMLElement[];
  const ids = headings.map((h) => h.id).filter(Boolean);

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));

      const first = visible[0]?.target as HTMLElement | undefined;
      if (first?.id) onActiveId(first.id);
    },
    { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] }
  );

  for (const h of headings) io.observe(h);

  const onScroll = () => {
    if (ids.length === 0) return;
    const y = window.scrollY + 120;
    let current = ids[0];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= y) current = id;
      else break;
    }
    onActiveId(current);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  return () => {
    io.disconnect();
    window.removeEventListener('scroll', onScroll);
  };
}
