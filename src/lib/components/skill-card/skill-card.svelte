<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { cn } from '$lib/utils';
	import type { HTMLDivAttributes } from 'bits-ui/dist/internal';
	import { sineInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	interface $$Props extends HTMLDivAttributes {
		skillText: string;
		percentage: number;
	}

	export let skillText: string;
	export let percentage: number;
	export let className: $$Props['class'] = undefined;

	let progressing = tweened(0, {
		duration: 1000,
		easing: sineInOut,
		delay: 250,
	});
</script>

<div
	on:inview={() => progressing.set(percentage * 100)}
	use:inview={{ rootMargin: '-5%' }}
	class={cn(
		'bg-muted/5 rounded-lg py-6 px-4 duration-1000 ease-out flex flex-col space-y-4 h-fit opacity-0 translate-y-2/4 [&[data-inview="true"]]:translate-y-0 [&[data-inview="true"]]:opacity-100',
		className,
	)}
	{...$$restProps}>
	<h1 class="font-semibold text-lg">{skillText}</h1>
	<div
		class="flex justify-end items-center py-1 isolate px-4 bg-background rounded-full relative overflow-hidden">
		<div
			class="absolute right-full w-full h-full -z-10 bg-primary"
			style={`translate: ${$progressing}% 0%;`} />
		<h2>{$progressing.toFixed(0)}%</h2>
	</div>
</div>
