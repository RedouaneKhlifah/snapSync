/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // "anep-yellow": "#ffd200",
            },
            fontFamily: {
                // cairo: ["Cairo", "sans-serif"]
            },
            dropShadow: {
                "black-sm": ["0 2px 4px rgb(0 0 0 / 0.5)"],
                "inset-black-sm": "inset 0 2px 4px rgba(0, 0, 0, 1)"
            },
            boxShadow: {},
            screens: {
                "sm-max": { max: "639px" },
                "md-max": { max: "767px" },
                "lg-max": { max: "1023px" },
                "xl-max": { max: "1279px" },
                "2xl-max": { max: "1535px" },
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px"
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("child", "&>*");
            addVariant("child-hover", "&>*:hover");
            addVariant("child-focus", "&>*:focus");
            addVariant("child-active", "&>*:active");
        })
    ]
};

