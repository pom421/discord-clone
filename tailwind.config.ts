import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        gray: {
          900: "#1E1F22", // fond de la barre de navigation des serveurs
          800: "#1E1F22", // fond de la recherche/bouton
          700: "#2B2D31", // fond de la barre des channels
          500: "#313339", // fond de la zone des messages
          300: "#E3E5E8", // texte des messages
          200: "#989DA6", // fond des dates séparant les messages
          100: "#979DA5", // date des messages
          50: "F2F3F5", // marque sur la barre de navigation des serveurs
        },
        brand: "#5B65E9",

        violet: {
          500: "#9834e9",
        },
      },
      fontFamily: {
        sans: ["gg sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
