module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}"],  // TODO: enable in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1.3rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        primary: {
          // light: "#bbf7d7",
          DEFAULT: "#99fdc7",
          dark: "#4dc081",
          darker: "#3caa6e",
          darkest: "#217a49",
        },
        secondary: {
          DEFAULT: "#001409",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
