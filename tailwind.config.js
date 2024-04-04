/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter"],
            },
            boxShadow: {
                typedream: 'rgba(0, 0, 0, 0.09) 0px 3px 12px'
            }
        },
    },
    plugins: [],
};
