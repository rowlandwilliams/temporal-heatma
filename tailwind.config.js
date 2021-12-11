module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: { '2xs': '0.625rem' },
            fontFamily: {
                // extent fonts here
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
