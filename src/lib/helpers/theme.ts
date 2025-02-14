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

	let css = ":root {\n";

	for (const [key, palette] of Object.entries(theme.palettes)) {
		for (const tone of paletteTones) {
			const color = hexFromArgb(palette.tone(tone));
			css += `  --md-${getKebabCaseFromCamelCase(key)}-${tone}: ${color};\n`;
		}
	}

	for (const [key, value] of Object.entries(theme.schemes.light.toJSON())) {
		const color = hexFromArgb(value);
		css += `  --md-${getKebabCaseFromCamelCase(key)}: ${color};\n`;
	}

	css += "}\n\n.dark {\n";

	for (const [key, value] of Object.entries(theme.schemes.dark.toJSON())) {
		const color = hexFromArgb(value);
		css += `  --md-${getKebabCaseFromCamelCase(key)}: ${color};\n`;
	}
	css += "}";

	let styleTag = document.getElementById("dynamic-theme-style");
	if (!styleTag) {
		styleTag = document.createElement("style");
		styleTag.id = "dynamic-theme-style";
		document.head.appendChild(styleTag);
	}
	styleTag.textContent = css;
};
