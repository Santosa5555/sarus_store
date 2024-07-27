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
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        display: ['Lobster', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      screens: {
        'xxs':'444px',
        'xs': '480px',  // Custom breakpoint for extra small screens
        
        'sm': '640px',  // Default small screen
        'md': '768px',  // Default medium screen
        'lg': '1024px', // Default large screen
        'xl': '1280px', // Default extra large screen
        
      },

     
    },
  },
  plugins: [],
}

