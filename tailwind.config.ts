import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        title: ['Cairo'],
        E_body: ['Italiana'],
        A_body: ['Scheherazade New'],
      },
      screens: {
        'sm': '850px',
        'md': '850px',
        's_lg': '1050',
        'lg': '1420px',
      },
      fontSize:{
        's_lg': '1rem'
      },
      backgroundColor: {
        'card': '#1a202c'
      }
    },
  },
  plugins: [],
} satisfies Config;
