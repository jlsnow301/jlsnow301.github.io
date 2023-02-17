/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "jeremiahs-card": "url('/bg.jpg')",
      },
      skew: {
        8: "8deg",
        8.5: "8.5deg",
        9: "9deg",
      },
    },
    fontFamily: {
      serif: ["copperplate gothic"],
    },
  },
  plugins: [],
};
