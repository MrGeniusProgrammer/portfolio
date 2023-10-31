<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<h6 {...$$restProps} class={cn('text-xl md:text-4xl leading-tight', className)}>
	<slot />
</h6>
