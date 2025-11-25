import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router pages
    "./pages/**/*.{js,ts,jsx,tsx}",     // Legacy Pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
