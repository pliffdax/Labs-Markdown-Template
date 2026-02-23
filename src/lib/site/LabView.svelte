<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import type { TocItem } from "./toc";
  import { buildToc } from "./toc";
  import { setupScrollSpy } from "./scrollspy";
  import { config } from "./config";

  export let title: string;
  export let Component: any;

  let articleEl: HTMLElement | null = null;
  let toc: TocItem[] = [];
  let activeId = "";
  let cleanup: (() => void) | null = null;

  async function rebuild() {
    if (!articleEl) return;

    // дождаться, пока <svelte:component> реально отрендерится в DOM
    await tick();

    cleanup?.();
    toc = buildToc(articleEl, config.toc.minDepth, config.toc.maxDepth);
    activeId = "";
    cleanup = setupScrollSpy(articleEl, (id) => (activeId = id));
  }

  // ВАЖНО:
  // rebuild только когда есть и компонент, и articleEl
  // (иначе на первом заходе после / toc будет пустым)
  $: if (Component && articleEl) {
    void rebuild();
  }

  // Если title меняется без смены Component — тоже перестроим (не обязательно, но безопасно)
  $: if (title && Component && articleEl) {
    // title сменится вместе с Component, но пусть будет
    void rebuild();
  }

  onDestroy(() => cleanup?.());

  function scrollToId(id: string) {
    const root = articleEl;
    if (!root) return;

    const el = root.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

<div class="doc">
  <aside class="toc-panel">
    <div class="toc-title">Зміст</div>
    <div class="toc-subtitle">{title}</div>

    {#if toc.length > 0}
      <nav class="toc">
        {#each toc as item (item.id)}
          <button
            class="toc-item"
            class:active={activeId === item.id}
            style={`margin-left:${(item.depth - config.toc.minDepth) * 12}px`}
            on:click={() => scrollToId(item.id)}
            type="button"
          >
            {item.text}
          </button>
        {/each}
      </nav>
    {:else}
      <div class="toc-empty">Немає заголовків для змісту.</div>
    {/if}
  </aside>

  <section class="paper">
    <article class="md" bind:this={articleEl}>
      <svelte:component this={Component} />
    </article>
  </section>
</div>
