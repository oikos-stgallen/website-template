/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte,js,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [{
            oikos: {
                "primary": "#4D619D",
                "secondary": "#D7E0EB",
                "accent": "#002A72",
                "neutral": "#C4CDCD",
                "base-100": "#ffffff",
            },
        }]
    },
}

