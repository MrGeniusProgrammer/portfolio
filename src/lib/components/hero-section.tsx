"use client";

import React from "react";
import { Button } from "./ui/button";

export function HeroSection() {
	return (
		<div className="relative mx-auto w-full max-w-6xl px-4 py-8">
			<div className="flex flex-col items-center lg:flex-row">
				{/* Left side: description and call-to-action */}
				<div className="mb-8 lg:mb-0 lg:w-1/2">
					<h1 className="mb-4 text-4xl font-bold">
						Welcome to My Portfolio
					</h1>
					<p className="mb-6">
						I'm a developer who crafts amazing experiences through
						code. Explore my work and get in touch!
					</p>
					<Button size="sm">Get STarted</Button>
				</div>
				{/* Right side: Three.js scene */}
			</div>
		</div>
	);
}
