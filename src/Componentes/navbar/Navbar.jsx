import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import ZapatillaLogo from '../../assets/ZapatillaLogo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";




const navigation = [
  { name: 'Step Legends', to: '/', current: true },
  { name: 'Zapatillas', to: '/zapatillas', current: false },
  { name: 'Hombre', to: '/hombre', current: false },
  { name: 'Mujer', to: '/mujer', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}



export default function Example() {
  const [cartCount, setCartCount] = useState(1); 
  const { loginWithRedirect, logout, isAuthenticated} = useAuth0();
  

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
            <img src={ZapatillaLogo} alt="Logo de Zapatillas" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
          <div className='search_box' autoComplete="off">
            <input className='m-1 search_txt p-1 rounded-md' type="text" placeholder="Search your product..." />
             <button className='bg-gray-300 p-1 rounded-md text-gray-600 hover:text-white hover:bg-gray-600 '>Search</button>
          </div>


        {/* Cart Button */}
        <Link to="/cart" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">View cart</span>
        <i className="fas fa-shopping-cart text-xl"></i>

        {/* Notificación de cantidad */}
        {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {cartCount}
        </span>
        )}
        </Link>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
{/* 
                 <div>
                  {isAuthenticated &&  (
                    <div>
                    <img className="h-8 w-8 rounded-full" src={user.picture} alt="" />
                    <p>{user.name}</p>
                    </div>
                  )}
                  </div>  */}
              
                  <i class="fa-solid fa-user text-xl text-white m-1"></i>
                 
                  
                </MenuButton>
              </div>
          
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
               {!isAuthenticated ? (
                <MenuItem>
                  <button
                    onClick={() => loginWithRedirect()}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </button>
                </MenuItem>
              ) : (
                <MenuItem>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </MenuItem>
              )}
            </MenuItems>
                
            
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pb-3 pt-2">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as={Link} 
        to={item.to} 
        aria-current={item.current ? 'page' : undefined}
        className={classNames(
          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium',
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
