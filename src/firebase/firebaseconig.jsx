// Import the necessary Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // If you need authentication
import { getFirestore } from 'firebase/firestore'; // If you're using Firestore

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4mcxJx5EpGl9uTkSwBiXfpQidbQdZVas",
  authDomain: "prescripto-580c7.firebaseapp.com",
  databaseURL: "https://prescripto-580c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prescripto-580c7",
  storageBucket: "prescripto-580c7.firebasestorage.app",
  messagingSenderId: "26914231377",
  appId: "1:26914231377:web:0eb10069f4291bc741d470",
  measurementId: "G-P5T485X199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
 export const db = getFirestore(app);
export default app; // If you need the app instance elsewhere
