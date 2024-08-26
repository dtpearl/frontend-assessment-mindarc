import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background-desktop": "url(https://via.placeholder.com/1920x650)",
        "hero-background-mobile": "url(https://via.placeholder.com/600x600)",
      },
    },
  },
  plugins: [],
};
export default config;
