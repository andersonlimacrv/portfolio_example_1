/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#1F2335',
                secondary: '#393A50',
                accent: '#8F3E46',
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                site: 'url("/site-bg.svg")',
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, 'sans-serif'],
                sora: [`var(--font-sora)`, 'sans-serif'],
            },
            dropShadow: {
                '3xl': '1px .25px .25px rgba(255, 255, 255, .5)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)'
                ]
            },
        },
    },
    container: {
        padding: {
            DEFAULT: '15px',
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
