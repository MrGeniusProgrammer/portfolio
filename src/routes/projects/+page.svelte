<script>
	import { H4 } from '$lib/components/ui/topography';
	import { navHeight } from '$lib/stores/nav';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section class="w-screen h-screen p-4" style={`padding-top: ${$navHeight}px;`}>
	<div
		class="border-dashed w-full h-full relative border-muted border-2 border-spacing-52 flex justify-center items-center">
		<H4 class="text-muted">No Projects Yet</H4>
	</div>
</section>
