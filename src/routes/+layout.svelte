<script lang="ts">
  import "../app.css";
  import { config, performerTitleLine } from "$lib/site/config";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    const imgs = Array.from(
      document.querySelectorAll<HTMLImageElement>(".md img"),
    );

    for (const img of imgs) {
      const markBroken = () => img.classList.add("img-broken");

      img.addEventListener("error", markBroken);

      if (img.complete && img.naturalWidth === 0) markBroken();
    }
  });
</script>

<div class="container">
  <section class="cover">
    <div class="cover-main">
      <h1 class="cover-title">
        {config.report?.title ?? "ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ"}
      </h1>
      {#if config.report?.subjectLine}
        <div class="cover-subtitle">{config.report.subjectLine}</div>
      {/if}
      <div class="cover-performer">{performerTitleLine(config.student)}</div>
    </div>

    {#if config.student.photo}
      <div class="cover-photo">
        <img
          src={config.student.photo}
          alt={`Фото: ${config.student.fullName}`}
        />
      </div>
    {/if}
  </section>

  <nav class="lab-buttons" aria-label="Навігація по роботах">
    {#each config.labs as lab}
      <a
        class="lab-btn"
        class:active={$page.url.pathname === `/lab/${lab.slug}` ||
          ($page.url.pathname === "/" && lab.slug === config.labs[0]?.slug)}
        href={`/lab/${lab.slug}`}
      >
        {lab.button}
      </a>
    {/each}
  </nav>

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <span class="muted">Контент: Markdown у папці <code>content/</code></span>
    <span class="footer-sep">·</span>
    <a class="footer-link" href="/about">Про шаблон</a>
  </footer>
</div>
