<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<code
	{...$$restProps}
	class={cn(
		'px-1.5 py-0.5 bg-muted text-xs text-foreground rounded-md',
		className,
	)}>
	<slot />
</code>
