import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ZapatillaLogo from '../../assets/ZapatillaLogo.png';

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

export default function Navbar({ cartItems, searchQuery, setSearchQuery }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = (to) => location.pathname === to;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo y navegación principal */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={ZapatillaLogo} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Enlaces de navegación (desktop) */}
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

          {/* Sección derecha */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
            {/* Buscador */}
            <form onSubmit={handleSearch} className="flex gap-2 mr-4">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="m-1 search-txt p-1 rounded-md text-black w-40 sm:w-48 lg:w-56"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gray-300 p-1 rounded-md text-gray-600 hover:text-white hover:bg-gray-600"
              >
                Buscar
              </button>
            </form>

            {/* Carrito */}
            <Link 
              to="/cart" 
              className="relative ml-3 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
                </span>
              )}
            </Link>
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