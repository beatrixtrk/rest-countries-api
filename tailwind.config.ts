import type { Config } from "tailwindcss"


const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
            },
            boxShadow: {
                "header": "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
                "dark-header": "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
                "custom-card": "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
                "dark-custom-card": "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
                "input": "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
                "dark-input": "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
                "button": "0px 0px 7px 0px rgba(0, 0, 0, 0.29);",
                "dark-button": "0px 0px 7px 0px rgba(0, 0, 0, 0.29);",
                "flag": "0px 0px 14px 4px rgba(0, 0, 0, 0.03);",
                "dark-flag": "0px 0px 14px 4px rgba(0, 0, 0, 0.03);"
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config