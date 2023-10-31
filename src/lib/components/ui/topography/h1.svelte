<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h1
	class={cn(
		'text-6xl md:text-9xl font-bold tracking-wider leading-tight',
		className,
	)}
	{...$$restProps}>
	<slot />
</h1>
