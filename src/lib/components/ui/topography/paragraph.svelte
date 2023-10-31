<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLParagraphElement> {}
	let className: $$Props['class'] = '';
	export { className as class };
</script>

<p
	{...$$restProps}
	class={cn('text-muted-foreground tracking-wide leading-normal', className)}>
	<slot />
</p>
