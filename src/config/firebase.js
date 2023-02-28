// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC8kvqks0sbP0b3lldxuGzkP37yCY1yANg",
//   authDomain: "moviezzzz-f5370.firebaseapp.com",
//   projectId: "moviezzzz-f5370",
//   storageBucket: "moviezzzz-f5370.appspot.com",
//   messagingSenderId: "884836542219",
//   appId: "1:884836542219:web:a681f0c789f1445ffda40e",
//   measurementId: "G-B9LTX8WG2V",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app)


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGM2YbTd5Y8oUKjPphR5UnSRbl0zRqoMQ",
  authDomain: "authentication-fcf69.firebaseapp.com",
  projectId: "authentication-fcf69",
  storageBucket: "authentication-fcf69.appspot.com",
  messagingSenderId: "623260174731",
  appId: "1:623260174731:web:1f15c88aa353ec75c0878e",
  measurementId: "G-0JX1VCFKR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
