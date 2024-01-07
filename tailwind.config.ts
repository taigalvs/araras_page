/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FEE7E8",
          200: "#FDC9CA",
          300: "#FAABAC",
          400: "#F86E6F",
          500: "#F53132",
          600: "#CC0B0D",
          700: "#A2090A",
          800: "#780607",
          900: "#4E0404",
        },
        secondary: {
          100: "#E5F2FF",
          200: "#B3D4FF",
          300: "#80B5FF",
          400: "#4D97FF",
          500: "#1A79FF",
          600: "#005BE6",
          700: "#0043B2",
          800: "#002C7F",
          900: "#00154C",
        },
        accent: {
          100: "#E5FFE5",
          200: "#B3FFB3",
          300: "#80FF80",
          400: "#4DFF4D",
          500: "#1AFF1A",
          600: "#00E600",
          700: "#00B200",
          800: "#007F00",
          900: "#004C00",
        },

        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
