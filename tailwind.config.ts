import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roxoEscuro: "#151F42",
        roxoClaro: "#7569C9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "390px",
        sm: "550px",
        md: "710px",
        lg: "1100px",
        xl: "1250px",
        xxl: "1400px",
      },
      backgroundImage: {
        gradientRoxo: "linear-gradient(to bottom, #151F42 30%, #7569C9 100%)",
        gradientCadastroLogin:
          "linear-gradient(to bottom, #151F42 20%, #7569C9 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
