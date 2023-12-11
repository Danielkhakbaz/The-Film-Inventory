import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: ["light", "dracula"],
  },
  plugins: [require("daisyui")],
};

export default config;
