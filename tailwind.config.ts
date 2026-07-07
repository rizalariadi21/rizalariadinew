import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0E17",
        "text-primary": "#F3F5F9",
        "text-secondary": "#8B93A6",
        glow: {
          blue: "#2F8CFF",
          green: "#00E5A0",
          orange: "#FF7A45",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #2F8CFF 0%, #00E5A0 100%)",
        "gradient-cta": "linear-gradient(135deg, rgba(47,140,255,0.18) 0%, rgba(0,229,160,0.14) 50%, rgba(255,122,69,0.16) 100%)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(47,140,255,0.35)",
        "glow-green": "0 0 40px rgba(0,229,160,0.35)",
        "glow-orange": "0 0 40px rgba(255,122,69,0.35)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
