/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      animation: {
        'loop-scroll': 'loop-scroll 45s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },  
      fontFamily: {
        'abcd': ['Wedding', "sans-serif"],
        'dancing' :["Dancing Script", "cursive"],
        'feedback' :["Playwrite CU", "cursive"],
        'fb': ["Comic Neue", "cursive"],
        'intro': ["The Nautigal", "cursive"]
      },
      scrollBehavior: {
        smooth: 'smooth',
      }, 
      backgroundImage: {
        'golden-gradient': 'linear-gradient(45deg, #DAC471, #CBA135, #E2BF4E, #E7C46E)',
      },
    },
  },
  plugins: [],
}