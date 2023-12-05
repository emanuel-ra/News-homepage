import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter",'sans-serif'],
      },
      textColor:{
        'very-dark-blue':'var(--Very-Dark-Blue)',
        'dark-grayish-blue':'var(--Dark-Grayish-Blue)' ,
        'soft-red':'var(--Soft-Red)' ,
        'soft-orange':'var(--Soft-Orange)',
        'grayish-blue':'var(--Grayish-Blue)',
      },
      backgroundColor:{
        'very-dark-blue':'var(--Very-Dark-Blue)' ,
        'soft-red':'var(--Soft-Red)'
      },
    },
  },
  plugins: [],
};
