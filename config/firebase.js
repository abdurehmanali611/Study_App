// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCi9vMFF2nY8ulM46BRApbUD5Uv4peD9qg',
  authDomain: 'study-pal-de518.firebaseapp.com',
  projectId: 'study-pal-de518',
  storageBucket: 'study-pal-de518.appspot.com',
  messagingSenderId: '522954414611',
  appId: '1:522954414611:web:c17bbe29cb6af16ecd7de6'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const auth = getAuth(app)