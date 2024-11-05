import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'All Doctors', path: '/doctors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="text-blue-600 h-20 p-2 pr-8  mt-2 mr-6 ml-6 pl-8">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Logo" className="h-10" />
        </Link>

        <div className="flex space-x-8">
          <ul className="flex space-x-6 text-black font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-blue-600 transition ${
                    location.pathname === item.path ? 'text-blue-600 border-b-2  border-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className=" bg-indigo-500 text-white font-semibold py-2 px-4  rounded-3xl transition">
            Create Account
          </button>
        </div>
      </nav>

      <div className="mt-4">
      <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
      </div>
    </div>
  );
}

export default Header;
