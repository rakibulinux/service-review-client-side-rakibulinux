/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          350: "#fdc040",
        },
        green: {
          150: "#55bb90",
          250: "#3bb77e",
          350: "#29a56c",
          450: "#77a464",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
