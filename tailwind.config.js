/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        "32in": {min: "3840px" },
        // => @media (max-width: 1535px) { ... }
  
        "27in": { min: "2560px" },
        // => @media (max-width: 1279px) { ... }
  
        "24in": { min: "1920px" },
        // => @media (max-width: 1023px) { ... }
      },
      colors: {
        val: {
          light: "#6796bf",
          dark: "#192033",
        },
        desc: {
          top: "#f9fadb",
          bot: "#c8d1e3",
        },
      },
    },
  },
  plugins: [],
};
