module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Inter", "-apple-system", "Roboto", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 4px 0 rgba(0,0,0,0.1)",
      },
      colors: {
        // Salimia action pastels — each pairs with black ink only
        sal: {
          green: "#CDE3B7", // Sage — positive / primary action
          orange: "#F5B894", // Apricot — ask / request
          blue: "#BFE0E2", // Mist — inbox / info
          lilac: "#D9C5E8", // Lilac — auxiliary
          yellow: "#F5E1A4", // Butter — auxiliary / pending
          pink: "#F2A2C0", // Bloom — negative / attention
          cream: "#F4E9C4", // Cream — editorial surface
        },
      },
    },
  },
  plugins: [],
};
