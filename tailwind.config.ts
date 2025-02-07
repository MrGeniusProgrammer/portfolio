import { tailwindcssScale } from "./tailwindcss-scale";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindcssContainerQueries from "@tailwindcss/container-queries";
import { tailwindcssTheme } from "./tailwindcss-theme";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
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
    tailwindcssTheme({
      sourceColor: "#6750A4",
      customColors: {},
      palleteTones: [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
    }),
  ],
} satisfies Config;
