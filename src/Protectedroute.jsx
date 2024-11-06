// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

// A custom route that checks if the user is authenticated
function ProtectedRoute({ element, ...rest }) {
  const auth = getAuth();
  const user = auth.currentUser; // Check if the user is logged in

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" />} // Redirect to login if not authenticated
    />
  );
}

export default ProtectedRoute;
