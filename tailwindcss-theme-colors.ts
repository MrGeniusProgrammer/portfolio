import {
	argbFromHex,
	hexFromArgb,
	Theme,
	themeFromSourceColor
} from "@material/material-color-utilities";
import plugin from "tailwindcss/plugin";

export const snakeCaseFromCamelCase = (value: string) =>
	value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

interface Options<CC extends Record<string, string>> {
	palleteTones: number[];
	processVariableName?: (value: string) => string;
	themes: Record<
		string,
		{ sourceColor: string; customColors?: Record<keyof CC, string> }
	> & {
		default: {
			sourceColor: string;
			customColors?: CC;
		};
	};
}

export const tailwindcssThemeColors = <CC extends Record<string, string>>({
	palleteTones,
	processVariableName = (value) => value,
	themes
}: Options<CC>) => {
	const createTheme = (
		sourceColor: string,
		customColors: Record<string, string>
	) => {
		const customMaterialColors = Object.entries(customColors).map(
			([key, value]) => ({
				name: key,
				value: argbFromHex(value),
				blend: true
			})
		);

		return themeFromSourceColor(
			argbFromHex(sourceColor),
			customMaterialColors
		);
	};

	const defaultTheme = createTheme(
		themes.default.sourceColor,
		themes.default.customColors ?? {}
	);

	const colors: Record<string, string> = {};

	for (const key of Object.keys(defaultTheme.palettes)) {
		for (const palleteTone of palleteTones) {
			const variable = processVariableName(
				`${snakeCaseFromCamelCase(key)}-${palleteTone * 10}`
			);
			colors[variable] = `var(--${variable})`;
		}
	}

	for (const key of Object.keys(defaultTheme.schemes.light.toJSON())) {
		const variable = processVariableName(`${snakeCaseFromCamelCase(key)}`);
		colors[variable] = `var(--${variable})`;
	}

	return plugin(
		({ addBase }) => {
			const addTheme = (
				theme: Theme,
				lightSelector: string,
				darkSelector: string
			) => {
				const bases: Record<string, Record<string, string>> = {};

				for (const [key, pallete] of Object.entries(theme.palettes)) {
					const palleteUtilities: Record<string, string> = {};
					for (const palleteTone of palleteTones) {
						const tone = pallete.tone(palleteTone);
						const variable = processVariableName(
							`${snakeCaseFromCamelCase(key)}-${palleteTone * 10}`
						);
						palleteUtilities[`--${variable}`] = hexFromArgb(tone);
					}
					bases[lightSelector] = palleteUtilities;
				}

				for (const [mode, scheme] of Object.entries(theme.schemes)) {
					const modeUtilities: Record<string, string> = {};
					for (const [key, value] of Object.entries(
						scheme.toJSON()
					)) {
						const variable = processVariableName(
							`${snakeCaseFromCamelCase(key)}`
						);
						modeUtilities[`--${variable}`] = hexFromArgb(value);
					}
					const utilsKey =
						mode === "light" ? lightSelector : darkSelector;
					const value = bases[utilsKey];
					bases[utilsKey] = value
						? {
								...value,
								...modeUtilities
							}
						: modeUtilities;
				}

				return bases;
			};

			let bases = {};

			if (themes) {
				for (const [themeName, value] of Object.entries(themes)) {
					bases = {
						...bases,
						...addTheme(
							createTheme(
								value.sourceColor,
								value.customColors ?? {}
							),
							`.theme-${themeName}`,
							`.dark .theme-${themeName}`
						)
					};
				}
			}

			addBase(bases);
		},
		{
			theme: {
				extend: {
					colors
				}
			}
		}
	);
};
