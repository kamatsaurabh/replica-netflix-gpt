// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAJ9-QGo7S4BZWFOeoki1CthyuRgOJZwk",
  authDomain: "netflixgpt-259db.firebaseapp.com",
  projectId: "netflixgpt-259db",
  storageBucket: "netflixgpt-259db.appspot.com",
  messagingSenderId: "708895531157",
  appId: "1:708895531157:web:2475c5afc117f374c7bb9c",
  measurementId: "G-5003JT9WY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();