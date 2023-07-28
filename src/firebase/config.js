// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUJfsofAcHppC5XLh6S3buYqfUbKk3kMM",
  authDomain: "pfreactjs.firebaseapp.com",
  projectId: "pfreactjs",
  storageBucket: "pfreactjs.appspot.com",
  messagingSenderId: "606224210107",
  appId: "1:606224210107:web:a1027ff498c58b9f3fb19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);