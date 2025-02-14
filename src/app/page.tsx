import { HeroSection } from "@/lib/components/hero-section";
import { Navbar } from "@/lib/components/navbar";

export default function Home() {
	return (
		<div className="grid min-h-screen w-screen grid-rows-[auto_1fr]">
			<Navbar />
			<div className="size-full">
				<HeroSection />
			</div>
		</div>
	);
}
