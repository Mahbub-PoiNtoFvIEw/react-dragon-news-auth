// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNYwX-6vT8Wchqp4N2lIdSYvwWNMxk5iE",
  authDomain: "react-dragon-news-auth-9fd32.firebaseapp.com",
  projectId: "react-dragon-news-auth-9fd32",
  storageBucket: "react-dragon-news-auth-9fd32.firebasestorage.app",
  messagingSenderId: "662424211587",
  appId: "1:662424211587:web:6b099ef3accaba3ada4bb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;