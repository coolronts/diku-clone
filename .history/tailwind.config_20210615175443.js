module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            color: {
                secondary: "#0f5b7d",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};