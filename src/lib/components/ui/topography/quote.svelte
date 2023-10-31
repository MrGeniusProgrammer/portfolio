<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLQuoteAttributes } from 'svelte/elements';

	interface $$Props extends HTMLQuoteAttributes {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<q
	{...$$restProps}
	class={cn(
		"[quotes:'“'_'”'] isolate before:-z-10 before:opacity-70 before:absolute before:content-[open-quote] before:p-2 before:top-0 before:left-0 before:text-9xl before:text-muted before:font-bold before:font-serif after:-z-10 after:opacity-70 after:absolute after:content-[close-quote] after:p-2 after:right-0 after:text-end after:text-9xl after:text-muted after:font-bold after:font-serif after:-translate-y-[10%]",
		className,
	)}>
	<slot />
</q>
