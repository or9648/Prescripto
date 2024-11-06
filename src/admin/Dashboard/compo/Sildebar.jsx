import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaUserPlus, FaList } from 'react-icons/fa'; 
function Sildebar() {
    const location = useLocation();

    // Sidebar menu items with their paths and icons
    const menuItems = [
      { name: 'Add Doctor', path: '/add-doctor', icon: <FaUserPlus /> },
      { name: 'Doctor List', path: '/doctor-list', icon: <FaList /> },
    ];
  
  return (
    <div className="bg-gray-200 p-4 w-48 min-h-full">
    <h2 className="text-lg font-bold mb-6">Admin Dashboard</h2>
    <ul className="space-y-4">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className={`flex items-center gap-2 p-2 rounded-lg transition ${
              location.pathname === item.path
                ? 'text-white bg-blue-600'
                : 'text-blue-600 hover:bg-blue-100'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Sildebar