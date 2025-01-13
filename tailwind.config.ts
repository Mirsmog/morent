import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "82.5rem",
      },
    },
    extend: {
      fontFamily: {
        jakarta: "var(--font-jakarta)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: "hsl(var(--color-primary-neutral-900))",
          800: "hsl(var(--color-primary-neutral-800))",
          700: "hsl(var(--color-primary-neutral-700))",
          600: "hsl(var(--color-primary-neutral-600))",
          500: "hsl(var(--color-primary-neutral-500))",
          400: "hsl(var(--color-primary-neutral-400))",
          300: "hsl(var(--color-primary-neutral-300))",
          200: "hsl(var(--color-primary-neutral-200))",
          100: "hsl(var(--color-primary-neutral-100))",
          0: "hsl(var(--color-primary-neutral-0))",
        },
        success: {
          900: "hsl(var(--color-success-900))",
          800: "hsl(var(--color-success-800))",
          700: "hsl(var(--color-success-700))",
          600: "hsl(var(--color-success-600))",
          500: "hsl(var(--color-success-500))",
          400: "hsl(var(--color-success-400))",
          300: "hsl(var(--color-success-300))",
          200: "hsl(var(--color-success-200))",
          100: "hsl(var(--color-success-100))",
        },
        error: {
          900: "hsl(var(--color-error-900))",
          800: "hsl(var(--color-error-800))",
          700: "hsl(var(--color-error-700))",
          600: "hsl(var(--color-error-600))",
          500: "hsl(var(--color-error-500))",
          400: "hsl(var(--color-error-400))",
          300: "hsl(var(--color-error-300))",
          200: "hsl(var(--color-error-200))",
          100: "hsl(var(--color-error-100))",
        },
        warning: {
          900: "hsl(var(--color-warning-900))",
          800: "hsl(var(--color-warning-800))",
          700: "hsl(var(--color-warning-700))",
          600: "hsl(var(--color-warning-600))",
          500: "hsl(var(--color-warning-500))",
          400: "hsl(var(--color-warning-400))",
          300: "hsl(var(--color-warning-300))",
          200: "hsl(var(--color-warning-200))",
          100: "hsl(var(--color-warning-100))",
        },
        information: {
          900: "hsl(var(--color-information-900))",
          800: "hsl(var(--color-information-800))",
          700: "hsl(var(--color-information-700))",
          600: "hsl(var(--color-information-600))",
          500: "hsl(var(--color-information-500))",
          400: "hsl(var(--color-information-400))",
          300: "hsl(var(--color-information-300))",
          200: "hsl(var(--color-information-200))",
          100: "hsl(var(--color-information-100))",
        },
        secondary: {
          900: "hsl(var(--color-secondary-900))",
          800: "hsl(var(--color-secondary-800))",
          700: "hsl(var(--color-secondary-700))",
          600: "hsl(var(--color-secondary-600))",
          500: "hsl(var(--color-secondary-500))",
          400: "hsl(var(--color-secondary-400))",
          300: "hsl(var(--color-secondary-300))",
          200: "hsl(var(--color-secondary-200))",
          100: "hsl(var(--color-secondary-100))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
