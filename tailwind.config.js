module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover", "hover"],
      borderWidth: ["group-hover"],
      animation: ["group-hover", "hover", "focus",],
      fontWeight: ["group-hover",],
    },
  },
  plugins: [],
}