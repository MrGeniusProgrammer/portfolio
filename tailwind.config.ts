import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { tailwindcssDesignSystem } from "./tailwind-design-system";
import { tailwindcssScale } from "./tailwindcss-scale";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			keyframes: {
				"accordion-down": {
					from: {
						height: "0"
					},
					to: {
						height: "var(--radix-accordion-content-height)"
					}
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)"
					},
					to: {
						height: "0"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [
		tailwindcssScale({
			base: 1,
			processVariableName: (value) => `scale-${value}`,
			sizeVariableNames: [
				"4xs",
				"3xs",
				"2xs",
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"4xl"
			],
			ratio: 1.676
		}),
		tailwindcssAnimate,
		tailwindcssAspectRatio,
		tailwindcssDesignSystem({
			prefix: "md"
		})
	]
};

export default config;
