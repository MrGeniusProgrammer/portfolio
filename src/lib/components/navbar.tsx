"use client";

import Link from "next/link";
import { useTheme } from "../hooks/use-theme";
import { Button } from "./ui/button";

export function Navbar() {
	const [theme, setTheme] = useTheme();

	return (
		<nav className="px-scale-xl py-scale-m sticky top-0 w-full backdrop-blur-md">
			<div className="gap-scale-s flex justify-between">
				<div></div>

				<div className="gap-scale-s flex">
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

					<Button>Resume</Button>
				</div>
			</div>
		</nav>
	);
}
