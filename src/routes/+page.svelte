<script lang="ts">
	import { SideNavbar, SideNavbarItem } from '$lib/components/side-navbar';
	import { SkillCard } from '$lib/components/skill-card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<nav class="flex justify-between px-32 py-6 bg-transparent backdrop-blur-sm fixed top-0 left-0 w-screen z-50">
	<h1 class="font-semibold text-2xl"><a href="/">Abdullah Ayesha</a></h1>
	<ul class="flex list-none space-x-10 [&>li]:flex [&>li]:justify-center [&>li]:items-center">
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/projects">Projects</a>
		</li>
	</ul>
</nav>

<SideNavbar>
	<SideNavbarItem href="#home" active>Home</SideNavbarItem>
	<SideNavbarItem href="#skills">Skills</SideNavbarItem>
	<SideNavbarItem href="#contact">Contact</SideNavbarItem>
</SideNavbar>

<div class="[&>section]:bg-background overflow-x-hidden">
	<section
		class="w-screen h-screen pl-32 flex items-center isolate relative after:absolute after:top-2/4 after:left-32 after:-translate-y-2/4 overflow-hidden after:w-[1000px] after:aspect-square after:rounded-full after:bg-[radial-gradient(hsla(var(--color-primary)/0.03),transparent_70%)] after:-z-10"
		id="home"
	>
		<h1 class="font-bold text-9xl text-muted absolute top-0 left-0 select-none opacity-60 px-12 tracking-wider">WELCOME</h1>
		<div class="flex flex-col space-y-4 justify-center">
			<h1 class="font-semibold text-8xl tracking-wide mb-2">Fullstack Developer</h1>
			<p class="text-muted text-xl w-9/12 leading-normal tracking-wide">Hello! I am an inspiring web devloper tackling hard core problems and solving each of them with creativity and uniqueness.</p>
			<Button class="w-32">View My CV</Button>
		</div>
		<h1 class="font-bold text-9xl text-muted absolute bottom-0 right-0 select-none opacity-60 px-12 tracking-wider">WELCOME</h1>
	</section>

	<section class="w-screen px-40 pt-32" id="skills">
		<div class="grid grid-rows-3 auto-cols-[auto_1fr] gap-4 place-content-center">
			<SkillCard skillText="Javscript" precentage={0.82} />
			<SkillCard skillText="Typescript" precentage={0.74} />
			<SkillCard skillText="Python" precentage={0.67} />
			<SkillCard skillText="C/C++" precentage={0.78} />
			<SkillCard skillText="React JS" precentage={0.84} />
			<SkillCard skillText="Svelte" precentage={0.54} />
			<SkillCard skillText="MS Excel" precentage={0.79} />
			<SkillCard skillText="MS Access" precentage={0.93} />
			<SkillCard skillText="MS Word" precentage={0.57} />
		</div>
	</section>

	<section class="w-screen h-screen flex justify-center items-center" id="contact">
		<div class="grid grid-cols-[auto_auto] gap-4">
			<div class="flex flex-col space-y-2 w-80">
				<h1 class="text-2xl font-semibold">Get In Touch!</h1>
				<p class="text-muted-foreground">I’m here to help and answer any questions you might ask. I look forward to hearing from you.</p>
			</div>
			<form action="" class="flex flex-col space-y-4 justify-center w-96">
				<Input type="text" placeholder="Name" />
				<Input type="text" placeholder="Subject" />
				<Textarea placeholder="Details" class="max-h-48" />
				<Button type="submit">Send</Button>
			</form>
		</div>
	</section>
</div>
