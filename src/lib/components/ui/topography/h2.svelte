<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h2
	{...$$restProps}
	class={cn(
		'text-5xl md:text-8xl font-semibold tracking-wider leading-tight',
		className,
	)}>
	<slot />
</h2>
