/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#b45309',
                'primary-hover': '#92400e',
                'accent-gold': '#D4AF37',
                'warm-black': '#0c0a09',
                'warm-dark': '#1c1917',
                'warm-surface': '#292524',
                'gulf-copper': '#b45309',
            },
            fontFamily: {
                'display': ['Cairo', 'Tajawal', 'sans-serif'],
                'body': ['Cairo', 'Tajawal', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
