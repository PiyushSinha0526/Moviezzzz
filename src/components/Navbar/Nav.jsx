import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { RiZzzLine } from "react-icons/ri";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <nav className="bg-transparent fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <RiZzzLine size={"2rem"} />
            </div>
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className="navLinkLarge">
                  Home
                </NavLink>

                <NavLink to="movie" className="navLinkLarge">
                  Movies
                </NavLink>
                <NavLink to="tv" className="navLinkLarge">
                  TV
                </NavLink>

                <NavLink to="favourite" className="navLinkLarge">
                  Favourite
                </NavLink>
              </div>
              <div className="ml-2 flex gap-4 items-center">
                {auth?.currentUser == null ? (
                  <NavLink className="font-bold text-gray-400 border-2 border-blue-400 rounded-md px-4 py-1">
                    Login
                  </NavLink>
                ) : (
                  <NavLink className="font-bold text-gray-400 border-2 border-blue-400 rounded-md px-4 py-1" onClick={()=>logout()}>
                    Logout
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className=" -mr-2 flex md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className={
                  "text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="movies"
                className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Movie
              </NavLink>

              <NavLink
                to="tv"
                className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                TV
              </NavLink>

              <NavLink
                to="favourite"
                className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Favourites
              </NavLink>
              {auth?.currentUser == null ?(<NavLink className="text-white bg-blue-400 hover:text-blue-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                Login
              </NavLink>):(<NavLink className="text-white bg-blue-400 hover:text-blue-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"onClick={()=>logout()} >
                Logout
              </NavLink>)}
            </div>
          </div>
        }
      </Transition>
    </nav>
  );
}

export default Nav;
