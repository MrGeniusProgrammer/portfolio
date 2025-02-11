import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindcssContainerQueries from "@tailwindcss/container-queries";
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { tailwindcssScale } from "./tailwindcss-scale";
import { tailwindcssThemeColors } from "./tailwindcss-theme-colors";

export default {
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
		tailwindcssAspectRatio,
		tailwindcssTypography(),
		tailwindcssForms(),
		tailwindcssThemeColors({
			sourceColor: "#6750A4",
			customColors: {},
			palleteTones: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95],
			processName: (value) => `mc-${value}`
		})
	]
} satisfies Config;
