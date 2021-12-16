const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        body: ["Questrial", ...defaultTheme.fontFamily.sans],
        dancing: ["Playfair Display", "cursive"],
      },
      backgroundImage: {
        landing:
          // "url(https://assets2.ello.co/uploads/asset/attachment/13876712/ello-optimized-e5753625.jpg)",
          "url(https://assets2.ello.co/uploads/asset/attachment/12707987/ello-optimized-6e4da8da.jpg)",
      },
    },
  },
  plugins: [],
};
