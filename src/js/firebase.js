import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiXCyh5kxbsEH6ct7pssxjfUyqnelubGA",
  authDomain: "fr990-d7fe3.firebaseapp.com",
  projectId: "fr990-d7fe3",
  storageBucket: "fr990-d7fe3.appspot.com",
  messagingSenderId: "252436313742",
  appId: "1:252436313742:web:3579ee63137343a62e7bdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};