import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: 'rgba(255, 255, 255, 0.3)',
            },
            fontFamily: {
                sans: ['var(--font-druk)'],
            },
        },
    },
    plugins: [],
}
export default config
