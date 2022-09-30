// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_RahdVQgntRr1j8fMcqrqIcrjPXCcd6E",
  authDomain: "private-chat-react-js.firebaseapp.com",
  projectId: "private-chat-react-js",
  storageBucket: "private-chat-react-js.appspot.com",
  messagingSenderId: "895966856060",
  appId: "1:895966856060:web:1709dfea5110e968f35af9",
  measurementId: "G-9WKLSCWS03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

