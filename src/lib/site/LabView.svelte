<script lang="ts">
  import { onDestroy, onMount } from "svelte";
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

  onMount(() => {
    if (!articleEl) return;
    toc = buildToc(articleEl, config.toc.minDepth, config.toc.maxDepth);
    cleanup = setupScrollSpy(articleEl, (id) => (activeId = id));
  });

  onDestroy(() => cleanup?.());

  function scrollTo(id: string) {
    const el = document.getElementById(id);
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
        {#each toc as item}
          <button
            class="toc-item"
            class:active={activeId === item.id}
            style={`margin-left:${(item.depth - config.toc.minDepth) * 12}px`}
            on:click={() => scrollTo(item.id)}
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
