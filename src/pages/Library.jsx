import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import useRealTimeList from "../hooks/useRealTimeList";
import SmallCard from "./SmallCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Library() {
  const favourite = useRealTimeList();
  let [categories] = useState(["favourite", "watchlist", "completed"]);
  let [types] = useState(["movie", "tv"]);

  console.log(favourite);

  return (
    <div className="bg-gray-900 00 min-h-screen py-20 px-5 text-white">
      <h1>{favourite?.username}</h1>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 capitalize",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
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

        <Tab.Panels className="mt-2">
          {categories.map((cat, idx) => (
            <Tab.Panel key={idx}>
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  {types.map((type) => (
                    <Tab
                      key={type}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 capitalize",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
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
                  <Tab.Panels className="mt-2 text-red-400" key={type}>
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      {favourite?.[cat]?.[type].length > 0 ? (
                        favourite?.[cat]?.[type].map((x) => (
                          <>
                            {typeof x !== "undefined" && (
                              <div key={x}>
                                {console.log(typeof x !== "undefined")}
                                <SmallCard type={type} id={x} />
                              </div>
                            )}
                          </>
                        ))
                      ) : (
                        <h1>nothing</h1>
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
