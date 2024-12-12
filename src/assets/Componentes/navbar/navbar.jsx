import { useState } from 'react';
import './navbar.css';

function Navbar() {
  // Estado para manejar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para manejar el contador del carrito
  const [cartCount, setCartCount] = useState(1);

  // Función para alternar la visibilidad del menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para incrementar el contador del carrito
  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <nav className="bg-gray-900 flex flex-row top-0 left-0 w-full justify-between items-center">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="Logo">
            <h1>Step Legends</h1>
          </div>

          {/* Botones para móvil */}
          <div className="md:hidden flex space-x-4">
            <button className="text-2xl focus:outline-none relative">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute top-0 left-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="text-gray-800 text-2xl focus:outline-none"
              onClick={toggleMenu} // Asocia la función de clic
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Menú móvil */}
          <div
            id="mobileMenu"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } border-gray-200 md:hidden`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li className="m-1">Inicio</li>
              <li className="m-1">Productos</li>
              <li className="m-1">Ofertas</li>
            </ul>
          </div>

          {/* Menú de escritorio */}
          <div className="listmenu hidden md:flex">
            <ul className="flex p-2 items-center">
              <li className="m-1">Inicio</li>
              <li className="m-1">Productos</li>
              <li className="m-1">Ofertas</li>
              <li className="m-1 relative">
                <button
                  className="text-gray-800 text-2xl focus:outline-none relative"
                  onClick={incrementCart} // Incrementa el contador al hacer clic
                >
                  <i className="fas fa-shopping-cart text-[20px]"></i>
                  {cartCount > 0 && (
                    <span className="absolute top-0 left-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
