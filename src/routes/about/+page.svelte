<script>
	import { QuoteCard } from '$lib/components/quote-card';
	import {
		Cite,
		Code,
		H3,
		H6,
		Paragraph,
		Quote,
	} from '$lib/components/ui/topography';
	import { navHeight } from '$lib/stores/nav';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="w-screen h-screen" style={`padding-top: ${$navHeight}px;`}>
	<div
		class="p-8 h-full relative grid md:grid-cols-4 auto-rows-auto md:grid-rows-2 gap-8 md:gap-0">
		<div class="md:row-span-2 md:col-span-2 flex justify-center items-center">
			<div class="flex flex-col space-y-2 md:w-[35rem] md:space-y-4">
				<Paragraph>Nice to meet you.</Paragraph>
				<Paragraph>
					My name is Abdullah Aysha and I'm a self-learned fullstack developer.
					I've been home schooled and trying to give my IGCSE Exams next year,
					until then I am free for work.
				</Paragraph>
			</div>
		</div>
		<div
			class="relative md:col-span-2 flex flex-col justify-center items-center space-y-4">
			<H3>Quotes For Life</H3>
			<QuoteCard direction="bottom-right">
				<Quote>
					The man who asks a question is a fool for a minute, the man who does
					not ask is a fool for life.
				</Quote>
				<Cite>Confucius</Cite>
			</QuoteCard>
		</div>
		<div class="flex justify-center items-center">
			<Paragraph class="text-center">
				This website is created by using
				<Code>Tailwindcss</Code>
				and
				<Code>SvleteKit</Code>
			</Paragraph>
		</div>
	</div>
</section>
