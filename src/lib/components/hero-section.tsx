"use client";

import { SiInstagram } from "@icons-pack/react-simple-icons";

export function HeroSection() {
	return (
		<section className="flex size-full">
			<div className="gap-scale-m py-scale-l pl-scale-3xl pr-scale-l text-mc-neutral-900 flex flex-col border-0 border-r border-r-current">
				<a href="">
					<SiInstagram className="size-scale-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-m" />
				</a>
			</div>
			<div className="px-scale-xl py-scale-l size-full">
				<div className="relative size-full">
					<div className="">img</div>
					<div className="absolute top-0 left-0">Get in Contact</div>
					<div className="absolute right-0 bottom-0">
						<h1 className="mb-scale-xs text-lg">
							A Fullstack Developer
						</h1>
						<p className="text-sm">
							lorem epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar lorem epsium dollar lorem epsium
							dollar lorem epsium dollar lorem epsium dollar lorem
							epsium dollar
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
