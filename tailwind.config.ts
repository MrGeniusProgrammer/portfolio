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
	...getShades(`${prefix}-success`, shades),
	[`${prefix}-primary`]: `var(--${prefix}-primary)`,
	[`${prefix}-on-primary`]: `var(--${prefix}-on-primary)`,
	[`${prefix}-primary-container`]: `var(--${prefix}-primary-container)`,
	[`${prefix}-on-primary-container`]: `var(--${prefix}-on-primary-container)`,
	[`${prefix}-secondary`]: `var(--${prefix}-secondary)`,
	[`${prefix}-on-secondary`]: `var(--${prefix}-on-secondary)`,
	[`${prefix}-secondary-container`]: `var(--${prefix}-secondary-container)`,
	[`${prefix}-on-secondary-container`]: `var(--${prefix}-on-secondary-container)`,
	[`${prefix}-tertiary`]: `var(--${prefix}-tertiary)`,
	[`${prefix}-on-tertiary`]: `var(--${prefix}-on-tertiary)`,
	[`${prefix}-tertiary-container`]: `var(--${prefix}-tertiary-container)`,
	[`${prefix}-on-tertiary-container`]: `var(--${prefix}-on-tertiary-container)`,
	[`${prefix}-error`]: `var(--${prefix}-error)`,
	[`${prefix}-on-error`]: `var(--${prefix}-on-error)`,
	[`${prefix}-error-container`]: `var(--${prefix}-error-container)`,
	[`${prefix}-on-error-container`]: `var(--${prefix}-on-error-container)`,
	[`${prefix}-background`]: `var(--${prefix}-background)`,
	[`${prefix}-on-background`]: `var(--${prefix}-on-background)`,
	[`${prefix}-surface`]: `var(--${prefix}-surface)`,
	[`${prefix}-on-surface`]: `var(--${prefix}-on-surface)`,
	[`${prefix}-surface-variant`]: `var(--${prefix}-surface-variant)`,
	[`${prefix}-on-surface-variant`]: `var(--${prefix}-on-surface-variant)`,
	[`${prefix}-outline`]: `var(--${prefix}-outline)`,
	[`${prefix}-outline-variant`]: `var(--${prefix}-outline-variant)`,
	[`${prefix}-shadow`]: `var(--${prefix}-shadow)`,
	[`${prefix}-scrim`]: `var(--${prefix}-scrim)`,
	[`${prefix}-inverse-surface`]: `var(--${prefix}-inverse-surface)`,
	[`${prefix}-inverse-on-surface`]: `var(--${prefix}-inverse-on-surface)`,
	[`${prefix}-inverse-primary`]: `var(--${prefix}-inverse-primary)`
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
