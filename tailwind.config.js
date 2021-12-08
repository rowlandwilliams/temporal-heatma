module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: { '2xs': '0.625rem' },
            fontFamily: {
                'readexpro-regular': ['ReadexPro-Regular'],
                'readexpro-medium': ['ReadexPro-Medium'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
