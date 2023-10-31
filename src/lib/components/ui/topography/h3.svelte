<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h3
	{...$$restProps}
	class={cn('text-4xl md:text-7xl font-semibold leading-tight', className)}>
	<slot />
</h3>
