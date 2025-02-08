import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import ZapatillaLogo from '../../assets/ZapatillaLogo.png';

// Definimos las rutas de navegación
const navigation = [
  { name: 'Step Legends', to: '/', current: true },
  { name: 'Zapatillas', to: '/categoria/zapatillas', current: false },
  { name: 'Hombre', to: '/categoria/hombre', current: false },
  { name: 'Mujer', to: '/categoria/mujer', current: false },
  { name: 'Urbano', to: '/categoria/urbanas', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ cartItems }) {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const location = useLocation();

  // Función para determinar la ruta activa
  const isCurrentPath = (to) => location.pathname === to;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Botón del menú para móviles */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo y menú principal */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={ZapatillaLogo} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Enlaces de navegación */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      isCurrentPath(item.to) 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sección derecha (búsqueda, carrito, perfil) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Búsqueda */}
            <div className='search-box'>
              <input className='m-1 search-txt p-1 rounded-md' type="text" placeholder="Buscar productos..." />
              <button className='bg-gray-300 p-1 rounded-md text-gray-600 hover:text-white hover:bg-gray-600'>Buscar</button>
            </div>

            {/* Icono del Carrito con enlace a /cart */}
            <Link 
  to="/cart" 
  className="relative ml-3 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
>
  <i className="fas fa-shopping-cart text-xl"></i>
  {cartItems.reduce((total, item) => total + (item.quantity || 1), 0) > 0 && (
    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
      {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
    </span>
  )}
</Link>

            {/* Menú de usuario */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                <span className="sr-only">Menú usuario</span>
                <i className="fa-solid fa-user text-xl text-white m-1"></i>
              </MenuButton>

              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                {!isAuthenticated ? (
                  <MenuItem>
                    <button
                      onClick={() => loginWithRedirect()}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                    >
                      Iniciar sesión
                    </button>
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem>
                      <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Mi perfil
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Cerrar sesión
                      </button>
                    </MenuItem>
                  </>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className={classNames(
                isCurrentPath(item.to) 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
