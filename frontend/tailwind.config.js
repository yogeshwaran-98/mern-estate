module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpn9fJgrZbWqibu_ResSp6GqCgvMxnvo",
  authDomain: "rentifynow-da1a1.firebaseapp.com",
  projectId: "rentifynow-da1a1",
  storageBucket: "rentifynow-da1a1.appspot.com",
  messagingSenderId: "154125995613",
  appId: "1:154125995613:web:003c02d02f356e4ecf87b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
