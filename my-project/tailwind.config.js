/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí
        primary: '#1E40AF', // Un azul personalizado
        secondary: '#F59E0B', // Un naranja personalizado
        customGray: '#000000', // Un gris personalizado
      },
    },
    container: {
      center: true,
      padding: {
        default: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};
