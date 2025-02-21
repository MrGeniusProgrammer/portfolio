import merge from "deepmerge";
import plugin from "tailwindcss/plugin";

type DeepPartial<T> =
	T extends Array<infer U>
		? Array<DeepPartial<U>>
		: T extends object
			? { [P in keyof T]?: DeepPartial<T[P]> }
			: T;

const getKebabCaseFromCamelCase = (value: string) =>
	value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

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
			`${prefix}-${name}`,
			`var(--${prefix}-${name})`
		])
	);

	return {
		...getShades(`${prefix}-palette-primary`, shades),
		...getShades(`${prefix}-palette-secondary`, shades),
		...getShades(`${prefix}-palette-tertiary`, shades),
		...getShades(`${prefix}-palette-neutral-variant`, shades),
		...getShades(`${prefix}-palette-neutral`, shades),
		...getShades(`${prefix}-palette-error`, shades),
		...getShades(`${prefix}-palette-warn`, shades),
		...getShades(`${prefix}-palette-info`, shades),
		...getShades(`${prefix}-palette-success`, shades),
		...refColors
	};
};

type TypographyType = "display" | "headline" | "title" | "body" | "label";
type TypographySize = "sm" | "md" | "lg";
type TypographyConfig = {
	fontSize: string;
	fontWeight: string;
	lineHeight: string;
	letterSpacing: string;
};
type Typography = Record<
	TypographyType,
	{
		fontFamily: string[] | string;
		sizes: Record<TypographySize, TypographyConfig>;
	}
>;

type Easing = {
	emphasized: string;
	emphasizedDecelerate: string;
	emphasizedAccelerate: string;
	standard: string;
	standardDecelerate: string;
	standardAccelerate: string;
};

type Spacing = {
	base: number;
	ratio: number;
};

interface Options {
	prefix: string;
	typography: Typography;
	easing: Easing;
	spacing: Spacing;
}

export const tailwindcssDesignSystem = (userOpt?: DeepPartial<Options>) => {
	const defaultOpt: Options = {
		prefix: "md",
		spacing: {
			ratio: 1.676,
			base: 1
		},
		easing: {
			emphasized: "ease-in",
			emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
			emphasizedAccelerate: "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
			standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
			standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
			standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)"
		},
		typography: {
			display: {
				sizes: {
					lg: {
						fontSize: "57px",
						fontWeight: "400",
						lineHeight: "64px",
						letterSpacing: "-0.25px"
					},
					md: {
						fontSize: "45px",
						fontWeight: "400",
						lineHeight: "52px",
						letterSpacing: "0px"
					},
					sm: {
						fontSize: "36px",
						fontWeight: "400",
						lineHeight: "44px",
						letterSpacing: "0px"
					}
				},
				fontFamily: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			headline: {
				sizes: {
					lg: {
						fontSize: "32px",
						fontWeight: "400",
						lineHeight: "40px",
						letterSpacing: "0px"
					},
					md: {
						fontSize: "28px",
						fontWeight: "400",
						lineHeight: "36px",
						letterSpacing: "0px"
					},
					sm: {
						fontSize: "24px",
						fontWeight: "400",
						lineHeight: "32px",
						letterSpacing: "0px"
					}
				},
				fontFamily: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			title: {
				sizes: {
					lg: {
						fontSize: "22px",
						fontWeight: "400",
						lineHeight: "28px",
						letterSpacing: "0px"
					},
					md: {
						fontSize: "16px",
						fontWeight: "500",
						lineHeight: "24px",
						letterSpacing: "0.15px"
					},
					sm: {
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "20px",
						letterSpacing: "0.1px"
					}
				},
				fontFamily: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			body: {
				sizes: {
					lg: {
						fontSize: "16px",
						fontWeight: "400",
						lineHeight: "24px",
						letterSpacing: "0.5px"
					},
					md: {
						fontSize: "14px",
						fontWeight: "400",
						lineHeight: "20px",
						letterSpacing: "0.25px"
					},
					sm: {
						fontSize: "12px",
						fontWeight: "400",
						lineHeight: "16px",
						letterSpacing: "0.4px"
					}
				},
				fontFamily: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			},
			label: {
				sizes: {
					lg: {
						fontSize: "14px",
						fontWeight: "500",
						lineHeight: "20px",
						letterSpacing: "0.1px"
					},
					md: {
						fontSize: "12px",
						fontWeight: "500",
						lineHeight: "16px",
						letterSpacing: "0.5px"
					},
					sm: {
						fontSize: "11px",
						fontWeight: "500",
						lineHeight: "16px",
						letterSpacing: "0.5px"
					}
				},
				fontFamily: [
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				]
			}
		}
	};

	const opt = merge(defaultOpt, (userOpt ?? {}) as unknown as Options);

	// Generate the fontSize configuration from the typography system.
	const fontSizeConfig = Object.entries(opt.typography).reduce(
		(acc, [type, { sizes }]) => {
			Object.entries(sizes).forEach(([size, config]) => {
				// Create a key in the form of `${prefix}-${type}-${size}`.
				const key = `${opt.prefix}-${type}-${size}`;
				acc[key] = [
					config.fontSize,
					{
						lineHeight: config.lineHeight,
						letterSpacing: config.letterSpacing,
						fontWeight: config.fontWeight
					}
				];
			});
			return acc;
		},
		{} as Record<
			string,
			[
				string,
				{
					lineHeight: string;
					letterSpacing: string;
					fontWeight: string;
				}
			]
		>
	);

	// Generate the fontSize configuration from the typography system.
	const fontFamilyConfig = Object.entries(opt.typography).reduce(
		(acc, [type, { fontFamily }]) => {
			const key = `${opt.prefix}-${type}`;
			acc[key] = fontFamily;
			return acc;
		},
		{} as Record<string, string | string[]>
	);

	const transitionTimingFunctionConfig = Object.entries(opt.easing).reduce(
		(acc, [name, value]) => {
			const key = getKebabCaseFromCamelCase(name);
			acc[key] = value;

			return acc;
		},
		{} as Record<string, string>
	);

	const sizeVariableNames = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"];

	const middleIndex = Math.floor(sizeVariableNames.length / 2);

	const spacingConfig = Object.fromEntries(
		sizeVariableNames.map((name, index) => [
			`${opt.prefix}-${name}`,
			`${opt.spacing.base * opt.spacing.ratio ** (index - middleIndex)}em`
		])
	);

	return plugin(
		({ addUtilities, theme }) => {
			// Additional utilities can be added here if needed.
		},
		{
			theme: {
				extend: {
					colors: getThemeColorNames(
						opt.prefix,
						[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98]
					),
					fontSize: fontSizeConfig,
					fontFamily: fontFamilyConfig,
					transitionTimingFunction: transitionTimingFunctionConfig,
					spacing: spacingConfig
				}
			}
		}
	);
};
