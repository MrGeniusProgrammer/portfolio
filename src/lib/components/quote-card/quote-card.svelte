<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { cn } from '$lib/utils';
	import type { HTMLDivAttributes } from 'bits-ui/dist/internal';

	interface $$Props extends HTMLDivAttributes {
		direction: 'bottom-right' | 'bottom-left';
	}
	export let direction: $$Props['direction'];
</script>

<div {...$$restProps}>
	<div
		use:inview
		class={cn(
			'md:w-96 p-8 flex justify-center border-muted/10 border-2 relative flex-col space-y-2 transition-all duration-1000 ease-in-out opacity-0 md:opacity-100 [&[data-inview="true"]]:opacity-100 md:translate-x-0 [&[data-inview="true"]]:translate-x-0',
			direction === 'bottom-right'
				? 'shadow-[10px_10px_0_hsl(var(--color-primary))] translate-x-2/4'
				: 'shadow-[-10px_10px_0_hsl(var(--color-primary))] -translate-x-2/4',
		)}>
		<slot />
	</div>
</div>
