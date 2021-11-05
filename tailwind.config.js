module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5267Df",
        "custom-red": "#FA5959",
        "custom-grey": "#9194A2",
        "custom-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Zen: ["Zen, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
