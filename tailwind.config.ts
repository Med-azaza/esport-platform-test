import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
