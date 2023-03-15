import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useRef } from "react";
import { useAuth } from "../context/authContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Auth() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const { login, signup } = useAuth();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUp, setLoadingUp] = useState(false);

  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setError("");
      setLoadingUp(true);
      await signup(
        emailSignUpRef.current.value,
        passwordSignUpRef.current.value
      ).then(async (res) => {
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
      });
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoadingUp(false);
  }

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
                  ref={emailRef}
                  required
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="password"
                  ref={passwordRef}
                  required
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={loginHandler}
                  disabled={loading}
                  className="text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-500 hover:bg-blue-400 focus:ring-blue-600"
                >
                  Sign in
                </button>
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
                  ref={emailSignUpRef}
                  required
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="password"
                  ref={passwordSignUpRef}
                  required
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleSignUp}
                  disabled={loadingUp}
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
