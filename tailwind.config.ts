import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { ThemeKind } from "./src/lib/entities/theme";
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
			palleteTones: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95],
			processVariableName: (value) => `mc-${value}`,
			themes: {
				[ThemeKind.DEFAULT]: {
					sourceColor: "#6750A4",
					customColors: {}
				},
				[ThemeKind.BACKEND_DEVELOPER]: {
					sourceColor: "#0f0f0f"
				},
				[ThemeKind.FULLSTACK_DEVELOPER]: {
					sourceColor: "#ffffff"
				},
				[ThemeKind.UX_DEVELOPER]: {
					sourceColor: "#f0f0f0"
				},
				[ThemeKind.UI_DEVELOPER]: {
					sourceColor: "#000000"
				}
			}
		})
	]
} satisfies Config;
