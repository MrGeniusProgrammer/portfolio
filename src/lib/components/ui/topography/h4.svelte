<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h4
	{...$$restProps}
	class={cn('text-3xl md:text-6xl leading-tight', className)}>
	<slot />
</h4>
