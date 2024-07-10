/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "100%": {
            transform: "translateX(calc(-50% - 1rem))",
          },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      translate: {
        "full-0": "0",
        "full-1": "100%",
        "full-2": "200%",
        "full-3": "300%",
      },
      colors: {
        primary: "#396C03",
        secondary: "#FF8B00",
        paragraph: "#676767",
        "heading-2": "#3F3F3F",
        footer: "#224300",
      },
      inset: {
        "nav-left-0": "0px",
        "nav-left-1": "100%",
        "nav-left-2": "200%",
        "nav-left-3": "300%",
        "nav-left-4": "400%",
      },
      width: {
        "percent-0": "0%",
        "percent-25": "25%",
        "percent-50": "50%",
        "percent-75": "75%",
        "percent-100": "100%",
      },
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Marienda: ["Merienda", "cursive"],
      },
      spacing: {
        "primary-btn-large-x": "3.75rem",
        "primary-btn-large-y": "0.9375rem",
      },
      borderRadius: {
        "parimary-lg-btn": "14.025rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
