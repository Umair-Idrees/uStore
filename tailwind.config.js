/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ashing", "sans-serif"], // Replace default sans font
        serif: ["YourCustomSerif", "serif"], // You can also change serif fonts
        mono: ["YourCustomMono", "monospace"], // Change monospace fonts if needed
      },
    },
  },
  plugins: [],
};
