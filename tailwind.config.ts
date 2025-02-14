/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Usa la clase para cambiar de tema
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/accordion.js",
    '../path/to/node-waves/**/*.js',
  ],
  flyonui: {
    vendors: true // Enable vendor-specific CSS generation
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flyonui"),
    require("flyonui/plugin"),
    require("tailwindcss-motion"), // ✅ Asegurar que esté correctamente agregado
  ],
} satisfies Config;
