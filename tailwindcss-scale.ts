import plugin from "tailwindcss/plugin";

interface Option {
	processVariableName: (value: string) => string;
	sizeVariableNames?: string[];
	base: number;
	ratio: number;
}

const tailwindcssScaleConfig = ({
	processVariableName,
	sizeVariableNames = ["2xs", "xs", "s", "m", "l", "xl", "2xl"],
	base,
	ratio
}: Option) => {
	if (sizeVariableNames.length % 2 === 0) {
		throw new Error("size varaiblae names must have a midle or base size");
	}

	const middleIndex = Math.floor(sizeVariableNames.length / 2);
	const entries = sizeVariableNames.map((name, index) => [
		processVariableName(name),
		`${base * ratio ** (index - middleIndex)}em`
	]);

	console.log(entries);

	return Object.fromEntries(entries);
};

export const tailwindcssScale = (options: Option) =>
	plugin(() => {}, {
		theme: {
			extend: {
				spacing: tailwindcssScaleConfig(options)
			}
		}
	});
