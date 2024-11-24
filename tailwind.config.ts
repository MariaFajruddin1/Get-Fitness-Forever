/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/bg.png')",
      }
    },

    colors: {
      white: "#ffffff",
      green: "#C1E502",
      black: "#1D1D1D",
      gray: "#EEEEEE",
      "text-gray": "#616161",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }
      mm: "375px",
      ml: "425px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [[require("@tailwindcss/aspect-ratio")]],
};
