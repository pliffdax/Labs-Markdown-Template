declare module '*.md' {
  import type { SvelteComponent } from 'svelte';
  export default class MarkdownComponent extends SvelteComponent {}
  export const metadata: Record<string, any>;
}
