module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                secondary: "#0f5b7d",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};