// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAtxB3wul2Gre3baWruyiM7qOXn-IRhIKE",
  authDomain: "react-e-commerce-f5f33.firebaseapp.com",
  projectId: "react-e-commerce-f5f33",
  storageBucket: "react-e-commerce-f5f33.firebasestorage.app",
  messagingSenderId: "939251202034",
  appId: "1:939251202034:web:c00a7ea88ddc56fdad5d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
