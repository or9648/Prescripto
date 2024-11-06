import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Sildebar from '../compo/Sildebar';
// Import FontAwesome icons

function Dash() {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sildebar/>
   <div>
   </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">Dashboard Content</h1>
        {/* Outlet will render sub-routes like Add Doctor and Doctor List */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dash;
