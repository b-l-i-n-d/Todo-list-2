module.exports = {
    content: ['./dist/*.html'],
    theme: {
        extend: {
            fontFamily: {
                'roboto' : ['Roboto', 'sans-serif']
              }
        },
    },
    plugins: [require("daisyui")],
};
