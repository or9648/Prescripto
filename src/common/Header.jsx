import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const auth = getAuth();
  const user = auth.currentUser;  // Get the current user

  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'All Doctors', path: '/doctors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Function to handle button click for navigation to signup page
  const handleCreateAccountClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };
  const handleadminPanel = () => {
    navigate('/admin'); // Navigate to the signup page
  };

  // Function to handle logout
  const handleLogoutClick = () => {
    signOut(auth) // Sign out the user
      .then(() => {
        navigate('/login'); // Navigate to the login page after successful logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="text-blue-600 h-20 p-2 pr-8 mt-2 mr-6 ml-6 pl-8">
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
                    location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Conditionally render the button based on user authentication */}
          {user ? (
            <button
              onClick={handleLogoutClick} // Show logout button if user is logged in
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-3xl transition"
            >
              Logout
            </button>
          ) : (
            <div className=' flex  gap-6'>
            <button
            onClick={handleadminPanel} // Show create account button if user is not logged in
  className=" text-black  border-gray-600 border-2 hover:bg-slate-200 py-2 px-4 rounded-3xl transition"
>
Admin Panel
</button>
<button
  onClick={handleCreateAccountClick} // Show create account button if user is not logged in
  className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-3xl transition"
>
  Create Account
</button>
            </div>
           
          )}
        </div>
      </nav>

      <div className="mt-4">
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      </div>
    </div>
  );
}

export default Header;
