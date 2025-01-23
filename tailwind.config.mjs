/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        white: "var(--color-white)",
        bg: "var(--color-bg)",
        gray: "var(--color-gray)",
        "gray-bg": "var(--color-gray-bg)",
      },
      fontFamily: {
        baloo: ["Baloo Paaji 2", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
