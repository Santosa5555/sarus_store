import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounceOnce 0.1s ease-in-out 1',
   
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
       

      },
    },
  },
  plugins: [],
}

