import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

function Auth() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);

  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        await setDoc(doc(db, "users", auth?.currentUser?.uid), {
          username: username,
          favourite: {
            movie: [],
            tv: [],
          },
          watchlist: {
            movie: [],
            tv: [],
          },
          completed: {
            movie: [],
            tv: [],
          },
        });
      }
    );
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="flex text-lg">
        <div className="p-4 bg-gray-500 flex flex-col gap-4 w-72">
          <h3>SignIn</h3>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={signin}
            className="text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-500 hover:bg-blue-400 focus:ring-blue-600"
          >
            Sign in
          </button>
          {/* <button onClick={logout}>Sign out</button> */}
        </div>

        <div className="p-4 bg-gray-500 flex flex-col gap-4 w-72">
          <h3>SignUp</h3>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={signup}
            className="text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-500 hover:bg-blue-400 focus:ring-blue-600"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
