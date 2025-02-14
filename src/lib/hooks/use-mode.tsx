"use client";

import { useTheme } from "next-themes";
import React from "react";

export function useMode() {
	const { setTheme, theme } = useTheme();
	const isDarkMode = React.useMemo(() => theme === "dark", [theme]);
	const isLightMode = React.useMemo(() => theme === "light", [theme]);

	return {
		mode: theme as "dark" | "light",
		isDarkMode,
		isLightMode,
		setMode: setTheme as (value: "dark" | "light") => void
	} as const;
}
