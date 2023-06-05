// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//인증
import { getAuth } from "firebase/auth";
//파이어 스토어
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0wKGRRA8SKrSxsme4RUdRGZYjxKM9WPg",
  authDomain: "mungmore-80ab2.firebaseapp.com",
  projectId: "mungmore-80ab2",
  storageBucket: "mungmore-80ab2.appspot.com",
  messagingSenderId: "342029425690",
  appId: "1:342029425690:web:abc338c93686e168b585a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//인증
//page에 import 할것!
export const auth = getAuth(app);
//파이어스토어
//page에 import 할것!
export const db = getFirestore(app);