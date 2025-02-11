import { SiInstagram } from "@icons-pack/react-simple-icons";

export function HeroSection() {
	return (
		<section className="flex size-full">
			<div className="flex flex-col gap-scale-m border border-r-current py-scale-l pl-scale-xl pr-scale-l text-mc-neutral-900">
				<a href="">
					<SiInstagram className="size-scale-icon-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-icon-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-icon-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-icon-m" />
				</a>
				<a href="">
					<SiInstagram className="size-scale-icon-m" />
				</a>
			</div>
			<div className="px-scale-xl py-scale-l">
				<div className="relative size-full">
					<div className="">img</div>
					<div className="absolute left-0 top-0">Get in Contact</div>
					<div className="absolute bottom-0 right-0">
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
