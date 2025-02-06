import { tailwindcssScale } from "./tailwindcss-scale";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindcssContainerQueries from "@tailwindcss/container-queries";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [
    tailwindcssScale({
      base: 1,
      prefix: "default",
      ratio: 1.333,
    }),
    tailwindcssScale({
      base: 1,
      prefix: "body",
      ratio: 1.333,
    }),
    tailwindcssScale({
      base: 1,
      prefix: "text",
      ratio: 1.333,
    }),
    tailwindcssAnimate,
    tailwindcssAspectRatio,
    tailwindcssTypography(),
    tailwindcssForms(),
    tailwindcssContainerQueries,
  ],
} satisfies Config;
