import { z } from "zod";

export enum ThemeKind {
	DEFAULT,
	UI_DEVELOPER,
	BACKEND_DEVELOPER,
	FULLSTACK_DEVELOPER,
	UX_DEVELOPER
}

export const Theme = z.nativeEnum(ThemeKind);

export type ThemeConfig = {
	sourceColor: string;
	customColors?: Record<string, string>;
};

export const defaultThemeConfigs: Record<ThemeKind, ThemeConfig> = {
	[ThemeKind.DEFAULT]: {
		sourceColor: "#dc2626"
	},
	[ThemeKind.UI_DEVELOPER]: {
		sourceColor: ""
	},
	[ThemeKind.UX_DEVELOPER]: {
		sourceColor: ""
	},
	[ThemeKind.BACKEND_DEVELOPER]: {
		sourceColor: ""
	},
	[ThemeKind.FULLSTACK_DEVELOPER]: {
		sourceColor: ""
	}
};
