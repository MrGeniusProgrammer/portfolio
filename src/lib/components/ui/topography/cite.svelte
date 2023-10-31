<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<cite {...$$restProps} class={cn('text-lg font-bold', className)}>
	<slot />
</cite>
