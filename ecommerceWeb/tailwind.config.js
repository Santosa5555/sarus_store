import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounceOnce 0.1s ease-in-out 1',
        'gradient-x': 'gradient-x 5s ease 0',
        'gradient-y': 'gradient-y 5s ease infinite',
        'gradient-xy': 'gradient-xy 5s ease infinite',
   
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right bottom' },
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

