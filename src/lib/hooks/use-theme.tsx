"use client";

import React from "react";
import { useLocalStorage } from "react-use";
import { Theme, ThemeKind } from "../entities/theme";

export function useTheme() {
	// Initialize theme state with a default value
	const [theme, setTheme] = useLocalStorage<ThemeKind>(
		"theme",
		ThemeKind.BACKEND_DEVELOPER,
		{
			deserializer: (value) => Theme.parse(value),
			serializer: (value) => value.toString(),
			raw: false
		}
	);

	// Whenever the theme changes, update the root element's class name.
	React.useEffect(() => {
		// Remove any previously set theme classes that start with "theme-"
		Array.from(document.body.classList)
			.filter((cls) => cls.startsWith("theme-"))
			.forEach((cls) => document.body.classList.remove(cls));

		document.body.classList.add(`theme-${theme}`);
	}, [theme]);

	return [theme, setTheme];
}
