import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4640DE",
          tertiary: "#E9EBFD",
          secondary: "#CCCCF5",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F8F8FD",
        },
        text: {
          primary: "#25324B",
          secondary: "#515B6F",
          muted: "#7C8493",
          subtle: "#A8ADB7",
          dark: "#202430",
        },
        border: {
          DEFAULT: "#D6DDEB",
        },
        accent: {
          green: "#56CDAD",
          blue: "#26A4FF",
          yellow: "#FFB836",
          red: "#FF6550",
          purple: "#7B61FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-epilogue)", "Epilogue", "sans-serif"],
        display: ["Clash Display", "var(--font-epilogue)", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "12.533332824707031px",
        lg: "31.333332061767578px",
        xl: "80px",
      },
    },
  },
  plugins: [],
};

export default config;
