import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        x: "1150px",
        lx: "1110px",
        mdx: "900px",
        xs: "500px",
        xxs: "420px",
      },
      colors: {
        green: {
          water: "#38ADB6",
        },
        yellow: "#FEB707",
        gray: "#383A49",
        background: "#F5F5F5",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
