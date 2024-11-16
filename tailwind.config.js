/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "sky-glow": "0 4px 8px rgba(135, 206, 235, 0.2)",
        "sky-glow-hover": "0 6px 10px rgba(135, 206, 235, 0.4)",
      },
      scale: {
        102: "1.02", // 2% increase in size
      },
    },
  },
  plugins: [],
};
