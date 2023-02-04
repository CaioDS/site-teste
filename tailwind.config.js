/** @type {import('tailwindcss').Config} */
module.exports = {
  //aplica estilização em todos os arquivos abaixo
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  //garante que não vai haver o purge das classes setadas abaixo
  safelist: [
    /^bg-/, //todas as classes que iniciam com bg-
    /^to-/, //todas as classes que iniciam com to-
    /^from-/, // todas as classes que iniciam com from-
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
