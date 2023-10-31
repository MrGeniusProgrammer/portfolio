<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h5
	{...$$restProps}
	class={cn('text-2xl md:text-5xl leading-tight', className)}>
	<slot />
</h5>
