import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        keyframes: {
            shine: {
                '0%': {
                    backgroundPosition: '0',
                },
                '100%': {
                    backgroundPosition: '1000px',
                },
            },
            'fade-in': {
                '0%': {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                },
                '100%': { opacity: '1' },
            },
            'fade-out': {
                '0%': { opacity: '1' },
                '100%': { opacity: '0' },
            },
        },
        animation: {
            shine: 'shine 2s infinite linear',
        },
    },
    plugins: [],
};
export default config;
