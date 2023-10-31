<script lang="ts">
	import { navHeight } from '$lib/stores/nav';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { navToggle, toggle } from './store';
	import { base } from '$app/paths';

	let element: HTMLElement;
	onMount(() => {
		$navHeight = element.clientHeight;
	});
</script>

<nav
	bind:this={element}
	class="flex justify-between items-center md:px-32 px-4 md:py-6 py-4 bg-transparent backdrop-blur-sm fixed top-0 left-0 w-screen z-50 isolate">
	<h1 class="font-semibold text-2xl"><a href={base}>Abdullah Ayesha</a></h1>
	<div
		class="h-full md:hidden cursor-pointer w-10 flex flex-col items-center justify-end space-y-2 [&>div]:h-1 [&>div]:w-full [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-in-out z-20"
		on:click={toggle}>
		<div
			class={!$navToggle
				? 'bg-foreground'
				: 'rotate-45 origin-top-left bg-primary'} />
		<div class={!$navToggle ? 'bg-foreground' : '-rotate-45 bg-primary'} />
		<div
			class={!$navToggle
				? 'bg-foreground'
				: 'rotate-45 origin-bottom-right bg-primary'} />
	</div>
	<div
		class={cn(
			'z-10 transition-all duration-300 ease-in-out md:space-x-10 fixed top-0 left-0 w-screen h-screen flex-col md:relative md:flex-row md:space-y-0 -translate-y-full opacity-0 md:translate-y-0 md:opacity-100 md:w-auto md:h-auto flex bg-background items-center md:bg-transparent md:items-start',
			!$navToggle ? '' : 'translate-y-0 opacity-100',
		)}
		style={`padding-top: ${$navHeight * ($navToggle ? 1 : 0)}px`}>
		<slot />
	</div>
</nav>
