"use client";

import { useTheme } from "../hooks/use-theme";

export function HeroSection() {
	const [theme, setTheme] = useTheme();

	return (
		<section className="px-scale-3xl py-scale-xl size-full">
			<div className="relative size-full">
				<div className="">img</div>
				<div className="prose absolute bottom-0 left-0">
					<h1>A Fullstack Developer</h1>
					<p>
						lorem epsium dollar lorem epsium dollar lorem epsium
						dollar lorem epsium dollar lorem epsium dollar lorem
						epsium dollar lorem epsium dollar lorem epsium dollar
						lorem epsium dollar lorem epsium dollar lorem
					</p>
				</div>
			</div>
		</section>
	);
}
