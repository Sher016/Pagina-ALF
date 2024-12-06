import React from "react";
import Navbar from "./components/navbar/navbar"; // Ajusta la ruta si es necesario
import Footer from "./components/footer/footer"; // Ajusta la ruta si es necesario

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Aquí va el contenido principal de la página */}
        <h1 className="text-4xl font-bold text-center my-8">Bienvenido </h1>
        <p className="text-center text-lg">
          Este es el contenido de la página. 
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default App;