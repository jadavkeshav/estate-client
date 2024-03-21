// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDj7TZcqrZ5cvIkzL5oWGqrGhcyw7xZ8z4",
  authDomain: "shankar-reak-estate.firebaseapp.com",
  projectId: "shankar-reak-estate",
  storageBucket: "shankar-reak-estate.appspot.com",
  messagingSenderId: "11240555989",
  appId: "1:11240555989:web:437cdfd652cbd991f3a95c",
  measurementId: "G-7NGB4L1E24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)