module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            backgroundOpacity: ['active'],
        },
    },
    plugins: [require("daisyui")],
};
