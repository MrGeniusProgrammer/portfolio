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
  processName?: (value: string) => string;
}

export const tailwindcssThemeColors = ({
  sourceColor,
  customColors,
  palleteTones,
  processName = (value) => value,
}: Options) => {
  const customMaterialColors = Object.entries(customColors).map(
    ([key, value]) => ({
      name: key,
      value: argbFromHex(value),
      blend: true,
    }),
  );
  const generatedTheme = themeFromSourceColor(
    argbFromHex(sourceColor),
    customMaterialColors,
  );

  const colors: Record<string, string> = {};

  for (const key of Object.keys(generatedTheme.palettes)) {
    for (const palleteTone of palleteTones) {
      const variable = processName(
        `${snakeCaseFromCamelCase(key)}-${palleteTone * 10}`,
      );
      colors[variable] = `var(--${variable})`;
    }
  }

  for (const key of Object.keys(generatedTheme.schemes.light.toJSON())) {
    const variable = processName(`${snakeCaseFromCamelCase(key)}`);
    colors[variable] = `var(--${variable})`;
  }

  return plugin(
    ({ addUtilities }) => {
      const utilities: Record<string, Record<string, string>> = {};

      for (const [key, pallete] of Object.entries(generatedTheme.palettes)) {
        const palleteUtilities: Record<string, string> = {};
        for (const palleteTone of palleteTones) {
          const tone = pallete.tone(palleteTone);
          const variable = processName(
            `${snakeCaseFromCamelCase(key)}-${palleteTone * 10}`,
          );
          palleteUtilities[`--${variable}`] = hexFromArgb(tone);
        }
        utilities[":root"] = palleteUtilities;
      }

      for (const [mode, scheme] of Object.entries(generatedTheme.schemes)) {
        const modeUtilities: Record<string, string> = {};
        for (const [key, value] of Object.entries(scheme.toJSON())) {
          const variable = processName(`${snakeCaseFromCamelCase(key)}`);
          modeUtilities[`--${variable}`] = hexFromArgb(value);
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
