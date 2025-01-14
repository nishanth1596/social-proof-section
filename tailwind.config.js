/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ef9546: "#ef9546",
        512051: "#512051",
        ee69a4: "#ee69a4",
        f7f2f7: "#f7f2f7",
        "927b91": "#927b91",
      },

      fontFamily: {
        "ff-leagueSpartan": "League Spartan, serif",
      },

      fontSize: {
        "40px": "2.5rem",
        "19px": "1.19rem",
        "17px": "1.06rem",
        "56px": "3.5rem",
      },

      spacing: {
        "17px": "1.06rem",
        "19px": "1.19rem",
        "40px": "2.5rem",
        "25px": "1.56rem",
      },
    },
  },
  plugins: [],
};
