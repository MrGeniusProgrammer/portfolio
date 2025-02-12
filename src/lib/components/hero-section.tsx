"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";

function RotatingCube() {
	// Reference to the mesh to update rotation each frame.
	const meshRef = React.useRef<any>(null);

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="orange" />
		</mesh>
	);
}

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
					<button className="rounded-full bg-blue-600 px-6 py-3 hover:bg-blue-700">
						Get Started
					</button>
				</div>
				{/* Right side: Three.js scene */}
				<div className="relative lg:w-1/2">
					{/* Title behind the Three.js object */}
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
						<h2 className="text-6xl font-bold opacity-20">
							Fullstack Developer
						</h2>
					</div>
					<Canvas className="h-96 w-full">
						<ambientLight intensity={0.5} />
						<pointLight position={[10, 10, 10]} />
						<RotatingCube />
					</Canvas>
				</div>
			</div>
		</div>
	);
}
