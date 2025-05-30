// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyDDEPHSboCkTS8Ua-xZhsfBtP1uK6FRoJM",
  authDomain: "proyecto-reactjs-82d1f.firebaseapp.com",
  projectId: "proyecto-reactjs-82d1f",
  storageBucket: "proyecto-reactjs-82d1f.firebasestorage.app",
  messagingSenderId: "764567135402",
  appId: "1:764567135402:web:cde98d504cdf13a2f79cd3"
};

 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

 