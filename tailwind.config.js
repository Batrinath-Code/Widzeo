/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FC5833",
        "title-color": "#000",
        "description-color": " #5F5F5F",
      },
      fontSize: {
        "title-md": "68px",
        "title-sm": "32px",
        "description-md": "22px",
        "description-sm": "14px",
      },
    },
  },
  plugins: [],
};
