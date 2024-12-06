import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Información general */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Mi Sitio Web</h4>
          <p>© 2024 Todos los derechos reservados.</p>
        </div>

        {/* Enlaces rápidos */}
        <ul className="flex gap-4">
          <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-gray-400">Servicios</a></li>
          <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;