/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050816",
        cardBg: "rgba(255, 255, 255, 0.05)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        primaryCyan: "#00E5FF",
        secondaryPurple: "#7C3AED",
        paragraphGray: "#A0AEC0",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 229, 255, 0.35)',
        'glow-purple': '0 0 25px rgba(124, 58, 237, 0.35)',
        'glow-dual': '0 0 30px rgba(0, 229, 255, 0.25), 0 0 40px rgba(124, 58, 237, 0.25)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-border': 'glowBorder 3s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowBorder: {
          '0%': { borderColor: '#00E5FF', boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)' },
          '50%': { borderColor: '#7C3AED', boxShadow: '0 0 25px rgba(124, 58, 237, 0.5)' },
          '100%': { borderColor: '#00E5FF', boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
