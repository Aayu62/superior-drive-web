// tailwind-init.js
import fs from 'fs';

// 1. Create tailwind.config.js
const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
`;

fs.writeFileSync('tailwind.config.js', tailwindConfig.trim());
console.log('✅ tailwind.config.js created.');

// 2. Create postcss.config.js
const postcssConfig = `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;

fs.writeFileSync('postcss.config.js', postcssConfig.trim());
console.log('✅ postcss.config.js created.');
