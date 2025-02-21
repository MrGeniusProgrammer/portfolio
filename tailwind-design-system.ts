import plugin from "tailwindcss/plugin";

const getShades = (name: string, shades: number[]) =>
	Object.fromEntries(
		shades.map((shade) => [`${name}-${shade}`, `var(--${name}-${shade})`])
	);

const getThemeColorNames = (prefix: string, shades: number[]) => {
	const refColorList = [
		"primary",
		"on-primary",
		"primary-container",
		"on-primary-container",
		"secondary",
		"on-secondary",
		"secondary-container",
		"on-secondary-container",
		"tertiary",
		"on-tertiary",
		"tertiary-container",
		"on-tertiary-container",
		"error",
		"on-error",
		"error-container",
		"on-error-container",
		"background",
		"on-background",
		"surface",
		"on-surface",
		"surface-variant",
		"on-surface-variant",
		"outline",
		"outline-variant",
		"shadow",
		"scrim",
		"inverse-surface",
		"inverse-on-surface",
		"inverse-primary"
	];

	const refColors = Object.fromEntries(
		refColorList.map((name) => [
			`${prefix}-ref-${name}`,
			`var(--${prefix}-ref-${name})`
		])
	);

	return {
		...getShades(`${prefix}-palette-primary`, shades),
		...getShades(`${prefix}-palette-secondary`, shades),
		...getShades(`${prefix}-palette-teritary`, shades),
		...getShades(`${prefix}-palette-neutral-variant`, shades),
		...getShades(`${prefix}-palette-neutral`, shades),
		...getShades(`${prefix}-palette-error`, shades),
		...getShades(`${prefix}-palette-warn`, shades),
		...getShades(`${prefix}-palette-info`, shades),
		...getShades(`${prefix}-palette-success`, shades),
		...refColors
	};
};

interface Options {
	prefix: string;
}

export const tailwindcssDesignSystem = (opt: Options) => {
	return plugin(
		({ addUtilities }) => {
			addUtilities({});
		},
		{
			theme: {
				extend: {
					colors: {
						...getThemeColorNames(
							opt.prefix,
							[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98]
						)
					},
					fontSize: {}
				}
			}
		}
	);
};
