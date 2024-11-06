import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Input from '../component/Input';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../firebase/firebaseconig'; // Firebase auth and db import
import { setDoc, doc } from 'firebase/firestore'; // Correct imports for Firestore

function Signup() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    const authInstance = getAuth(); // Initialize Firebase Auth

    createUserWithEmailAndPassword(authInstance, email, password) // Use createUserWithEmailAndPassword for signing up
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Now that the user is signed up, save user details in Firestore
        try {
          await setDoc(doc(db, 'patients', user.uid), {
            fullname: fullname,
            email: email,
            // Add any additional fields if required
          });

          toast.success('Registration successful!');
          console.log('User Data:', { fullname, email, password });
          
          // Navigate to the Home page after successful registration
          navigate('/');
        } catch (error) {
          toast.error(`Error saving user data: ${error.message}`);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border-2 border-gray-300 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>
        <p className="text-gray-600 text-center mb-8">Please sign up to book an appointment</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            name={fullname}
            setname={setFullname}
          />

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
          <button
            type="submit"
            className="w-full h-10 rounded-xl text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Toast Container for notifications */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />

        {/* "Already have an account?" link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-500 hover:text-indigo-700 font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
