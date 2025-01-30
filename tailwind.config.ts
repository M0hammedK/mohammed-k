import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // safelist: [
  //   { pattern: /.*/ }, // Safelist all classes
  // ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Cairo'],
        E_body: ['Italiana'],
        A_body: ['Scheherazade New'],
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize:{
        's_lg': '1rem'
      },
      backgroundColor: {
        'card': '#1a202c'
      },
      height:{
        '980': '800px'
      },
      minWidth:{
        '1280': '1280px'
      }
    },
  },
  plugins: [],
} satisfies Config;
