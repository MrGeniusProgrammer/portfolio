<script lang="ts" >
	import { cn } from "$lib/utils";
	import type { HTMLDivAttributes } from "bits-ui/dist/internal";
	import { onMount } from "svelte";

  interface $$Props extends HTMLDivAttributes {
    skillText: string
    precentage: number
  }

  export let skillText: string;
  export let precentage: number;
  export let className: $$Props["class"] = undefined;
  
  let progressElement: HTMLDivElement;
  let cardElement: HTMLDivElement;
  let percentageString = `${(precentage * 100).toFixed(0)}%`;

  onMount(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cardElement.animate({
            translate: "0% 0%",
            opacity: "1"
          }, {duration: 1000, fill: "forwards", easing: "ease-out"});
          
          progressElement.animate({
            translate: `${percentageString}`
          }, {duration: 1000, fill: "forwards", easing: "ease-in", delay: 250})

          observer.unobserve(cardElement);
        }
      })
    }, {
      rootMargin: "-5%"
    });

    observer.observe(cardElement);
  })

</script>

<div bind:this={cardElement} class={cn("space-x-4 bg-muted/5 rounded-lg py-6 px-4 col-span-2 grid grid-cols-[subgrid] opacity-0 [translate:0%_45%]", className)} {...$$restProps}>
  <h1 class="font-semibold text-lg">{skillText}</h1>
  <div class="flex justify-end items-center py-1 isolate px-4 bg-background rounded-full relative overflow-hidden">
    <div bind:this={progressElement} class="absolute right-full w-full h-full -z-10 bg-primary"></div>
    <h2>{percentageString}</h2>
  </div>
</div>