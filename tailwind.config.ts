import { tailwindcssScale } from "./tailwindcss-scale";
import type { Config } from "tailwindcss";

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
  ],
} satisfies Config;
