const autoprefixer = require("autoprefixer");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundImage: (theme) => ({
          "hero-pattern": "url('/public/img/hero.svg')",
        }),
        cwc: {
          blue: "#1873E9",
          grey: "#717171",
          fone: "#06123A",
          tone: "#175Cb7",
          featuresbg: "#06123A",
          featuresbtnbg: "#175CB7",
          loginbg: "#040f24",
          logininputbg: "#333333",
        },
      },
      inset: {
        464: "29rem",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover"], maxHeight: ["focus"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
