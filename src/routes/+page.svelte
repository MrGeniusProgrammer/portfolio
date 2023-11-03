<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { QuoteCard } from '$lib/components/quote-card';
	import { SideNavbar, SideNavbarItem } from '$lib/components/side-navbar';
	import { SkillCard } from '$lib/components/skill-card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		Cite,
		Code,
		H5,
		H6,
		Paragraph,
		Quote,
	} from '$lib/components/ui/topography';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<SideNavbar>
	<SideNavbarItem href="#home" active>Home</SideNavbarItem>
	<SideNavbarItem href="#about">About</SideNavbarItem>
	<SideNavbarItem href="#skills">Skills</SideNavbarItem>
	<SideNavbarItem href="#contact">Contact</SideNavbarItem>
</SideNavbar>

<section
	class="w-screen h-screen xl:pl-32 flex items-center overflow-hidden relative isolate"
	id="home">
	<h1
		use:inview
		class="font-bold text-6xl xl:text-9xl text-muted absolute top-0 left-0 select-none opacity-60 px-2 xl:px-12 tracking-wider [&[data-inview='true']]:animate-right [&[data-inview='true']]:duration-1000 [&[data-inview='true']]:ease-in-out [&[data-inview='true']]:fill-mode-forwards">
		WELCOME
	</h1>
	<div
		class="flex flex-col space-y-4 justify-center xl:items-start px-4 xl:px-0 relative isolate items-center xl:[&>:where(h1,p)]:text-left [&>:where(h1,p)]:text-center after:absolute after:top-2/4 after:left-2/4 after:-translate-x-2/4 after:-translate-y-2/4 after:w-[1000px] after:aspect-square after:rounded-full after:bg-[radial-gradient(hsla(var(--color-primary)/0.03),transparent_70%)] after:-z-10">
		<h1
			class="font-semibold xl:text-8xl text-6xl xl:tracking-wide tracking-wider mb-2">
			Fullstack Developer
		</h1>
		<Paragraph
			class="xl:text-xl text-lg w-9/12 leading-relaxed tracking-wider xl:leading-normal xl:tracking-wide">
			Hello! I am an inspiring web developer tackling hardcore problems and
			solving each problems with creativity and uniqueness.
		</Paragraph>
		<Button class="w-32">View My CV</Button>
	</div>
	<h1
		use:inview
		class="font-bold text-6xl lg:text-9xl text-muted absolute bottom-0 select-none right-0 opacity-60 px-2 md:px-12 tracking-wider [&[data-inview='true']]:animate-left [&[data-inview='true']]:duration-1000 [&[data-inview='true']]:ease-in-out [&[data-inview='true']]:fill-mode-forwards">
		WELCOME
	</h1>
</section>

<section class="w-screen flex justify-center items-center p-20" id="about">
	<div class="flex flex-col space-y-2">
		<div class="flex flex-col space-y-2 md:w-[35rem] md:space-y-4">
			<Paragraph>Nice to meet you.</Paragraph>
			<Paragraph>
				My name is Abdullah Aysha and I'm a self-learned fullstack developer.
				I've been home schooled and trying to give my IGCSE Exams next year,
				until then I am free for work.
			</Paragraph>
		</div>
		<div class="flex flex-col space-y-4">
			<H5>Quotes For Life</H5>
			<div class="flex flex-col justify-center space-y-4">
				<QuoteCard direction="bottom-right">
					<Quote>
						The man who asks a question is a fool for a minute, the man who does
						not ask is a fool for life.
					</Quote>
					<Cite>Confucius</Cite>
				</QuoteCard>
			</div>
		</div>
	</div>
</section>

<section class="w-screen px-4 md:px-16 pt-32 pb-16" id="skills">
	<div
		class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 auto-rows-[auto_auto] gap-4 place-content-center">
		<SkillCard skillText="Javscript" percentage={0.82} />
		<SkillCard skillText="Typescript" percentage={0.74} />
		<SkillCard skillText="Python" percentage={0.67} />
		<SkillCard skillText="C/C++" percentage={0.78} />
		<SkillCard skillText="React JS" percentage={0.84} />
		<SkillCard skillText="Svelte" percentage={0.54} />
		<SkillCard skillText="MS Excel" percentage={0.79} />
		<SkillCard skillText="MS Access" percentage={0.93} />
		<SkillCard skillText="MS Word" percentage={0.57} />
	</div>
</section>

<section
	class="w-screen h-screen flex justify-center items-center px-4 relative"
	id="contact">
	<div
		class="grid grid-rows-[auto_auto] grid-cols-[minmax(100%,24rem)] lg:grid-rows-1 lg:grid-cols-[20rem_24rem] gap-4">
		<div class="flex flex-col space-y-3">
			<H6>Get In Touch!</H6>
			<Paragraph class="text-muted-foreground">
				I’m here to help and answer any questions you might ask. I look forward
				to hearing from you.
			</Paragraph>
			<Paragraph>
				This website is created by using
				<Code>Tailwindcss</Code>
				and
				<Code>SvleteKit</Code>
			</Paragraph>
		</div>
		<form action="" class="flex flex-col space-y-4 justify-center">
			<Input type="text" placeholder="Name" />
			<Input type="text" placeholder="Subject" />
			<Textarea placeholder="Details" class="max-h-48" />
			<Button type="submit">Send</Button>
		</form>
	</div>
</section>
