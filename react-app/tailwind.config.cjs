/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E40AF",
          secondary: "#F59E42",
          accent: "#10B981",
        },
        customgray: "#9DA2B3",
      },
    },
  },
  plugins: [],
};
