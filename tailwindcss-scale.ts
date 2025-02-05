import plugin from "tailwindcss/plugin";

interface Option<T extends string> {
  prefix: T;
  base: number;
  ratio: number;
}

const tailwindcssScaleConfig = <T extends string>(options: Option<T>) => ({
  [`${options.prefix}-xxs`]: `${options.base * options.ratio ** -3}em`,
  [`${options.prefix}-xs`]: `${options.base * options.ratio ** -2}em`,
  [`${options.prefix}-s`]: `${options.base * options.ratio ** -1}em`,
  [`${options.prefix}-m`]: `${options.base}em`,
  [`${options.prefix}-l`]: `${options.base * options.ratio}em`,
  [`${options.prefix}-xl`]: `${options.base * options.ratio ** 2}em`,
  [`${options.prefix}-xxl`]: `${options.base * options.ratio ** 3}em`,
});

export const tailwindcssScale = <T extends string>(options: Option<T>) =>
  plugin(() => {}, {
    theme: {
      extend: {
        spacing: tailwindcssScaleConfig(options),
      },
    },
  });
