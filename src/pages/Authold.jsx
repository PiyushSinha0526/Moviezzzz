import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Auth() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
        (res) => {
          navigate("/");
        }
      );
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
        navigate("/");
      }
    );
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-sm px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 transi">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              SignIn
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              SignUp
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="p-4 rounded-md bg-gray-500 flex flex-col gap-4">
                <h3>SignIn</h3>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
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
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4 rounded-md bg-gray-500 flex flex-col gap-4">
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Auth;
