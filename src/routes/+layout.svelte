<script lang="ts">
	import { Nav, NavItem } from '$lib/components/nav';
</script>

<Nav>
	<NavItem href="/about">About</NavItem>
	<NavItem href="/projects">Projects</NavItem>
</Nav>

<div class="[&>section]:bg-background overflow-x-hidden">
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer base {
		:root {
			--color-background: 0 0% 7%;
			--color-foreground: 0 0% 100%;

			--color-muted: 0 0% 52%;
			--color-muted-foreground: 0 0% 80%;

			--color-popover: 0 0% 100%;
			--color-popover-foreground: 240 10% 3.9%;

			--color-card: 0 0% 100%;
			--color-card-foreground: 240 10% 3.9%;

			--color-border: 240 5.9% 90%;
			--color-input: 240 5.9% 90%;

			--color-primary: 182 100% 45%;
			--color-primary-foreground: 0 0% 98%;

			--color-secondary: 182 100% 75%;
			--color-secondary-foreground: 240 5.9% 10%;

			--color-accent: 240 4.8% 95.9%;
			--color-accent-foreground: 240 5.9% 10%;

			--color-destructive: 0 84.2% 60.2%;
			--color-destructive-foreground: 0 0% 98%;

			--color-ring: 240 5% 64.9%;

			--radius: 0.5rem;
		}
	}

	:global(*) {
		scroll-behavior: smooth;
	}

	:global(body) {
		@apply bg-background;
	}
</style>
