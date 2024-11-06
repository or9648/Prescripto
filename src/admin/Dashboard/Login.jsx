import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Input from '../../component/Input';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Correct method for login
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Loginadmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password) // Use signInWithEmailAndPassword for login
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success('Login successful!');
        console.log('User Data:', { email, password });

        // Navigate to the Home page after successful login
        navigate('/admin-dashboard');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border-2 border-gray-300 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <p className="text-gray-600 text-center mb-8">Please sign in to book an appointment</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name={email}
            setname={setEmail}
          />
          
          {/* Password Input */}
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name={password}
            setname={setPassword}
          />

          {/* Submit Button */}
          <button type="submit" className="w-full h-10 rounded-xl text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-200">
            Login
          </button>
        </form>

        {/* Toast Container for notifications */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        
        {/* "Don't have an account?" link */}
      
      </div>
    </div>
  );
}

export default Loginadmin;
