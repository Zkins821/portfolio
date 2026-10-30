import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCF9F3",
          100: "#F7F1E5",
          200: "#F0E4D0",
          300: "#E6D3B6",
          400: "#D9BE96",
        },
        biscuit: {
          DEFAULT: "#E8D8BF",
          light: "#F3E9D9",
          dark: "#CDB694",
        },
        choco: {
          dark: "#2A1810",
          milk: "#59331E",
          rich: "#3E2114",
          light: "#825032",
          surface: "#FBF7EF",
        },
        caramel: {
          DEFAULT: "#C47935",
          hover: "#AE6829",
          soft: "#F8EDE0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        cozy: "0 10px 30px -10px rgba(58, 30, 17, 0.08)",
        "cozy-lg": "0 20px 40px -15px rgba(58, 30, 17, 0.12)",
        "polaroid": "0 14px 38px rgba(44, 26, 17, 0.12), 0 4px 12px rgba(44, 26, 17, 0.06)",
        "pill": "0 2px 8px rgba(42, 24, 16, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
