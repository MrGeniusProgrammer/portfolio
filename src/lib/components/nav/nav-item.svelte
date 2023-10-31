<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { unToggle } from './store';

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
	}

	export let href: $$Props['href'];
	let className: $$Props['class'] = '';

	export { className as class };
</script>

<a
	on:click={unToggle}
	class={cn(
		'md:flex md:justify-center md:items-center text-muted-foreground cursor-pointer w-full py-2 px-4 text-3xl relative hover:bg-primary hover:text-foreground md:w-auto md:px-0 md:text-base md:hover:bg-transparent after:absolute after:bottom-0 after:left-0 after:right-0 after:-translate-x-full after:h-1 md:after:bg-primary after:opacity-0 after:transition-all after:duration-300 after:ease-in-out overflow-hidden',
		!$page.url.pathname.startsWith(href)
			? ''
			: 'bg-primary md:bg-transparent md:after:opacity-100 md:after:translate-x-0 text-foreground',
		className,
	)}
	{href}
	{...$$restProps}>
	<slot />
</a>
