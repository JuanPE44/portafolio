/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
