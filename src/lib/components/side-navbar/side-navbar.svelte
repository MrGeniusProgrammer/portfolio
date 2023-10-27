<script lang="ts">
	import { setCurrentInViewport } from "./context";

	setCurrentInViewport();
</script>

<nav class="fixed top-2/4 -translate-y-2/4 right-0 z-50 pr-12">
	<ul
		class="flex [--local-radius:0.625rem] list-none flex-col space-y-4 relative justify-center before:absolute before:right-0 before:-top-4 before:[clip-path:inset(0_30%_0_30%)] before:h-32 before:w-[var(--local-radius)] before:bg-gradient-to-t before:from-primary before:via-primary/15 before:via-primary/10 before:to-80% before:to-transparent before:-translate-y-full after:absolute after:right-0 after:-bottom-4 after:[clip-path:inset(0_30%_0_30%)] after:h-32 after:w-[var(--local-radius)] after:bg-gradient-to-b after:from-primary after:via-primary/15 after:via-primary/10 after:to-80% after:to-transparent after:translate-y-full"
	>
    <slot />
	</ul>
</nav>