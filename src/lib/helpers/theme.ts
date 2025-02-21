import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor
} from "@material/material-color-utilities";
import { ThemeConfig } from "../entities/theme";

const getKebabCaseFromCamelCase = (value: string) =>
	value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const applyThemeConfig = (themeConfig: ThemeConfig) => {
	const paletteTones = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98];
	const theme = themeFromSourceColor(
		argbFromHex(themeConfig.sourceColor),
		Object.entries(themeConfig.customColors ?? {}).map(([name, value]) => ({
			value: argbFromHex(value),
			name,
			blend: true
		}))
	);

	const target = document.body;

	for (const [key, palette] of Object.entries(theme.palettes)) {
		for (const tone of paletteTones) {
			const color = hexFromArgb(palette.tone(tone));
			target.style.setProperty(
				`--md-palette-${getKebabCaseFromCamelCase(key)}-${tone}`,
				color
			);
		}
	}

	for (const [key, lightValue] of Object.entries(
		theme.schemes.light.toJSON()
	)) {
		const lightColor = hexFromArgb(lightValue);
		const darkValue =
			theme.schemes.dark.toJSON()[
				key as unknown as keyof ReturnType<
					typeof theme.schemes.dark.toJSON
				>
			];
		const darkColor = hexFromArgb(darkValue);
		const name = getKebabCaseFromCamelCase(key);
		target.style.setProperty(
			`--md-${name}`,
			`${lightColor}`
			// `ligh-dark(${lightColor}, ${darkColor})`
		);
	}
};
