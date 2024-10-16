import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgWAwklfM_CxWoLkGRp9Yo9H9Kyj5ocBU",
  authDomain: "comision-71835.firebaseapp.com",
  projectId: "comision-71835",
  storageBucket: "comision-71835.appspot.com",
  messagingSenderId: "363677087490",
  appId: "1:363677087490:web:f280a2dbde976f1ec4b41b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
