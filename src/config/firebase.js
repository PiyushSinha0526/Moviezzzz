import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8kvqks0sbP0b3lldxuGzkP37yCY1yANg",
  authDomain: "moviezzzz-f5370.firebaseapp.com",
  projectId: "moviezzzz-f5370",
  storageBucket: "moviezzzz-f5370.appspot.com",
  messagingSenderId: "884836542219",
  appId: "1:884836542219:web:a681f0c789f1445ffda40e",
  measurementId: "G-B9LTX8WG2V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
