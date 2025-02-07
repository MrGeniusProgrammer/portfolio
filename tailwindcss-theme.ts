import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import plugin from "tailwindcss/plugin";

export const snakeCaseFromCamelCase = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

interface Options {
  sourceColor: string;
  customColors: Record<string, string>;
  palleteTones: number[];
}

export const tailwindcssTheme = (options: Options) => {
  const customColors = Object.entries(options.customColors).map(
    ([key, value]) => ({
      name: key,
      value: argbFromHex(value),
      blend: true,
    }),
  );
  const generatedTheme = themeFromSourceColor(
    argbFromHex(options.sourceColor),
    customColors,
  );

  const colors: Record<string, string> = {};

  for (const [key, pallete] of Object.entries(generatedTheme.palettes)) {
    for (const palleteTone of options.palleteTones) {
      const tone = pallete.tone(palleteTone);
      colors[`${snakeCaseFromCamelCase(key)}-${palleteTone}`] =
        `var(--${snakeCaseFromCamelCase(key)}-${palleteTone})`;
    }
  }

  for (const [key, value] of Object.entries(
    generatedTheme.schemes.light.toJSON(),
  )) {
    colors[`${snakeCaseFromCamelCase(key)}`] =
      `var(--${snakeCaseFromCamelCase(key)})`;
  }

  return plugin(
    ({ addUtilities }) => {
      const utilities: Record<string, Record<string, string>> = {};

      for (const [key, pallete] of Object.entries(generatedTheme.palettes)) {
        const palleteUtilities: Record<string, string> = {};
        for (const palleteTone of options.palleteTones) {
          const tone = pallete.tone(palleteTone);
          palleteUtilities[`--${snakeCaseFromCamelCase(key)}-${palleteTone}`] =
            hexFromArgb(tone);
        }
        utilities[":root"] = palleteUtilities;
      }

      for (const [mode, scheme] of Object.entries(generatedTheme.schemes)) {
        const modeUtilities: Record<string, string> = {};
        for (const [key, value] of Object.entries(scheme.toJSON())) {
          modeUtilities[`--${snakeCaseFromCamelCase(key)}`] =
            hexFromArgb(value);
        }
        const utilsKey = mode === "light" ? ":root" : ".dark";
        const value = utilities[utilsKey];
        utilities[utilsKey] = value
          ? {
              ...value,
              ...modeUtilities,
            }
          : modeUtilities;
      }

      addUtilities(utilities);
    },
    {
      theme: {
        extend: {
          colors,
        },
      },
    },
  );
};
