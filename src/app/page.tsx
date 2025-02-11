import { HeroSection } from "@/lib/components/hero-section";
import { Button } from "@/lib/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen min-h-screen grid grid-rows-[auto_1fr]">
      <nav className="px-scale-xl w-full py-scale-m bg-transparent backdrop-blur-md sticky top-0">
        <div className="flex gap-scale-s justify-between">
          <div></div>

          <div className="flex gap-scale-s">
            <Link href="#home" className="no-underline text-md">
              About
            </Link>
            <Link href="#home" className="no-underline text-md">
              Contact
            </Link>
            <Link href="#home" className="no-underline text-md">
              Projects
            </Link>
            <Link href="#home" className="no-underline text-md">
              Works
            </Link>
            <Link href="#home" className="no-underline text-md">
              Case Studies
            </Link>
            <Link href="#home" className="no-underline text-md">
              Blogs
            </Link>
            <Link href="#home" className="no-underline text-md">
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
