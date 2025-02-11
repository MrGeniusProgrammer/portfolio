import { HeroSection } from "@/lib/components/hero-section";
import { Button } from "@/lib/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid min-h-screen w-screen grid-rows-[auto_1fr]">
			<nav className="sticky top-0 w-full bg-transparent px-scale-xl py-scale-m backdrop-blur-md">
				<div className="flex justify-between gap-scale-s">
					<div></div>

					<div className="flex gap-scale-s">
						<Link href="#home" className="text-md no-underline">
							About
						</Link>
						<Link href="#home" className="text-md no-underline">
							Contact
						</Link>
						<Link href="#home" className="text-md no-underline">
							Projects
						</Link>
						<Link href="#home" className="text-md no-underline">
							Works
						</Link>
						<Link href="#home" className="text-md no-underline">
							Case Studies
						</Link>
						<Link href="#home" className="text-md no-underline">
							Blogs
						</Link>
						<Link href="#home" className="text-md no-underline">
							Changelogs
						</Link>

						<Button size="lg">Resume</Button>
					</div>
				</div>
			</nav>
			<div className="size-full">
				<HeroSection />
			</div>
		</div>
	);
}
