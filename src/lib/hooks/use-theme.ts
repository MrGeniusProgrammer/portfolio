"use client";

import React from "react";
import { useLocalStorage } from "react-use";
import { defaultThemeConfigs, Theme, ThemeKind } from "../entities/theme";
import { applyThemeConfig } from "../helpers/theme";

export function useTheme() {
	const [theme, setTheme] = useLocalStorage<ThemeKind>(
		"theme",
		ThemeKind.DEFAULT,
		{
			deserializer: (value) => Theme.parse(Number(value)),
			serializer: (value) => value.toString(),
			raw: false
		}
	);

	React.useEffect(() => {
		if (theme === undefined) {
			return;
		}

		applyThemeConfig(defaultThemeConfigs[theme]);
	}, [theme]);

	return [theme, setTheme] as const;
}
