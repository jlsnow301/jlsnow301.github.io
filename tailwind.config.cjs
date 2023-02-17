/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "jeremiahs-card": "url('/bg.webp')",
      },
      skew: {
        9.1: "9.1deg",
      },
    },
    fontFamily: {
      copperplate: ["Balthazar", "serif"],
    },
  },
  plugins: [],
};
