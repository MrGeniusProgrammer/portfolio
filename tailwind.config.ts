import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { tailwindcssScale } from "./tailwindcss-scale";

const getShades = (name: string, shades: number[]) =>
	Object.fromEntries(
		shades.map((shade) => [`${name}-${shade}`, `var(--${name}-${shade})`])
	);

const getThemeColorNames = (prefix: string, shades: number[]) => ({
	...getShades(`${prefix}-primary`, shades),
	...getShades(`${prefix}-secondary`, shades),
	...getShades(`${prefix}-teritary`, shades),
	...getShades(`${prefix}-neutral-variant`, shades),
	...getShades(`${prefix}-neutral`, shades),
	...getShades(`${prefix}-error`, shades),
	...getShades(`${prefix}-warn`, shades),
	...getShades(`${prefix}-info`, shades),
	...getShades(`${prefix}-success`, shades)
});

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				...getThemeColorNames(
					"md",
					[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98]
				)
			},
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
				"s",
				"m",
				"l",
				"xl",
				"2xl",
				"3xl",
				"4xl"
			],
			ratio: 1.676
		}),
		tailwindcssAnimate,
		tailwindcssAspectRatio
	]
};

export default config;
