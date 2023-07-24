/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const Rotate = plugin(function ({ addUtilities }) {
    addUtilities({
        ".rotate-x-180": {
            transform: "rotateX(180deg)"
        },
        ".preserve-3d": {
            transformStyle: "preserve-3d"
        }
    })
})

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				helvetica: ["Helvetica", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                leaner: ["Leaner", "sans-serif"],
			},
			colors: {
                dark: "#161617",
                "tailwind-blue-dark": "#020314"
            },
            letterSpacing: {
                'extra-wide': "0.3rem"
            },
            animation: {
                border: 'border 4s ease infinite',
              },
              keyframes: {
                border: {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
              },
        },
	},
	plugins: [Rotate],
}
