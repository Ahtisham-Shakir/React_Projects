// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhYGvAnUpE4i1acS8p8VzVXJ80Tg5_E0",
  authDomain: "crud-4b3c9.firebaseapp.com",
  projectId: "crud-4b3c9",
  storageBucket: "crud-4b3c9.appspot.com",
  messagingSenderId: "545098849552",
  appId: "1:545098849552:web:6ab1e678d1177f60869995",
  measurementId: "G-CXESRKR1QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
