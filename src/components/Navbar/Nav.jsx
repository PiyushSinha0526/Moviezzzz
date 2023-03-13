import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiZzzLine } from "react-icons/ri";
import { GrSearch } from "react-icons/gr";
import { useAuth } from "../../context/authContext";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function logoutHandler(e) {
    e.preventDefault();
    setLoading(true);
    await logout();
    navigate("/");
    setLoading(false);
  }

  return (
    <nav className="bg-transparent fixed w-full px-2 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <RiZzzLine size={30} />
            </div>
            <div className="hidden md:flex items-center justify-end w-full">
              <div className="ml-10 flex items-baseline justify-end space-x-4 w-full">
                <div className="relative w-full max-w-md">
                  <input
                    className="w-full px-4 py-2 text-sm  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search ..."
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <NavLink
                    to={`search/${query}`}
                    onClick={() => setQuery("")}
                    className="absolute right-2.5 bottom-1.5"
                  >
                    <GrSearch size={25} />
                  </NavLink>
                </div>
                <NavLink to="/" className="navLinkLarge">
                  Home
                </NavLink>

                <NavLink to="movie" className="navLinkLarge">
                  Movies
                </NavLink>
                <NavLink to="tv" className="navLinkLarge">
                  TV
                </NavLink>

                {currentUser && (
                  <NavLink to="library" className="navLinkLarge">
                    Library
                  </NavLink>
                )}
              </div>
              <div className="ml-2 flex gap-4 items-center">
                {currentUser?.email ? (
                  <NavLink
                    className="font-bold text-gray-400 border-2 border-blue-400 rounded-md px-4 py-1"
                    onClick={(e) => logoutHandler(e)}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="auth"
                    className="font-bold text-gray-400 border-2 border-blue-400 rounded-md px-4 py-1"
                  >
                    Login
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
                to="movie"
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

              {currentUser && (
                <NavLink
                  to="library"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Library
                </NavLink>
              )}

              <div className="relative w-full max-w-md mx-auto">
                <input
                  className="w-full px-4 py-2 text-sm  rounded-lg  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search ..."
                  required
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <NavLink
                  to={query !== "" && `search/${query}`}
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 bottom-1.5 active:scale-95"
                >
                  <GrSearch size={25} />
                </NavLink>
              </div>
              {currentUser?.email ? (
                <NavLink
                  className="w-full max-w-md mx-auto text-white  bg-gray-800 hover:text-blue-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={(e) => logoutHandler(e)}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink className="w-full max-w-md mx-auto text-white bg-blue-400 hover:text-blue-400 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        }
      </Transition>
    </nav>
  );
}

export default Nav;
