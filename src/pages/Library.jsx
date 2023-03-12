import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "../components";
import useRealTimeList from "../hooks/useRealTimeList";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Library() {
  const favourite = useRealTimeList();
  let [categories] = useState(["favourite", "watchlist", "completed"]);
  let [types] = useState(["movie", "tv"]);

  return (
    <div className="bg-gray-900 00 min-h-screen py-20 px-5 text-white">
      <Tab.Group>
        <Tab.List className="w-fit flex mx-auto rounded-xl bg-blue-900/20 p-1 sm:w-full md:max-w-3xl">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-24 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 capitalize sm:w-full",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2 max-w-[74rem] m-auto">
          {categories.map((cat, idx) => (
            <Tab.Panel key={idx}>
              <Tab.Group>
                <Tab.List className="w-fit mx-auto flex rounded-xl bg-blue-900/20 sm:w-full md:max-w-3xl">
                  {types.map((type) => (
                    <Tab
                      key={type}
                      className={({ selected }) =>
                        classNames(
                          "w-28 sm:w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 capitalize",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      {type}
                    </Tab>
                  ))}
                </Tab.List>

                {types.map((type) => (
                  <Tab.Panels className="mt-2 text-gray-800" key={type}>
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "rounded-xl bg-gray-700 p-3",
                        "lg:grid grid-cols-2 flex gap-3 flex-wrap justify-center"
                      )}
                    >
                      {favourite?.[cat]?.[type].length > 0 ? (
                        favourite?.[cat]?.[type].map((x) => (
                          <>
                            {typeof x !== "undefined" && (
                              <div key={x} className="text-white">
                                <HorizontalCard type={type} category={cat} id={x} />
                              </div>
                            )}
                          </>
                        ))
                      ) : (
                        <h1 className="text-blue-200 font-bold text-center "> {type}(s) not added - To add <Link to={`/${type}`} className="text-blue-400 bg-gray-900 py-1 px-4 rounded-md animate-pulse">more</Link></h1>
                      )}
                    </Tab.Panel>
                  </Tab.Panels>
                ))}
              </Tab.Group>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Library;
