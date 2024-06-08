import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4OjseUzIwhYf3tymOcJ7c8H5qt5ixf0w",
  authDomain: "sign-in-8a9ae.firebaseapp.com",
  projectId: "sign-in-8a9ae",
  storageBucket: "sign-in-8a9ae.appspot.com",
  messagingSenderId: "622232852815",
  appId: "1:622232852815:web:8906e3b31de1099c6dcd3a",
  measurementId: "G-PG93XES2CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
