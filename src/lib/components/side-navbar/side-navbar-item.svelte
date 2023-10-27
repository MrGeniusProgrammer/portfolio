<script lang="ts">
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import type { HTMLLiAttributes } from "svelte/elements";
	import { getCurrentInViewport } from "./context";

  interface $$Props extends HTMLLiAttributes {
    href: string
    active?: boolean
  }

  export let href: string;
  export let active: boolean = false;
  
  let element: HTMLLIElement;
  let className: $$Props["class"] = undefined;
  let currentInViewport = getCurrentInViewport();

  if (active) {
    $currentInViewport = href;
  }

  onMount(() => {
    const targetEl = document.querySelector(`section${href}`);
    if (!targetEl) return;

    window.addEventListener("scroll", () => {
      const pos = targetEl.getBoundingClientRect().top + targetEl.clientHeight;
      if (targetEl.getBoundingClientRect().top <= 0 && pos > 0) {
        $currentInViewport = href;
      }
    })
  })

</script>

<li bind:this={element} class={cn("text-right transition-all duration-300 font-semibold text-muted-foreground relative after:absolute after:top-2/4 pr-6 after:right-0 after:-translate-y-2/4 after:w-[var(--local-radius)] after:h-[var(--local-radius)] after:bg-white after:rounded-full after:transition-all after:duration-300 [&[data-active='true']]:text-foreground [&[data-active='true']]:after:ring-2 [&[data-active='true']]:after:ring-primary after:ring-offset-4 after:ring-offset-background", className)} data-active={$currentInViewport === href ? "true" : "false"} {...$$restProps}>
  <a href={href}>
    <slot />
  </a>
</li>