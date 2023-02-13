import React from "react";
import { Star } from "../index";

function Card({ data, Genres }) {
  return (
    <>
      {
        <ul className="flex gap-y-24 gap-x-6 flex-wrap justify-center">
          {data?.results?.map((res) => (
            <li
              key={res.id}
              className="bg-gray-600 w-60 h-80 rounded-md flex flex-col justify-end items-center relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                alt=""
                className="h-72 absolute -top-16 rounded-md"
              />
              <div className="text-white pb-2 flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-3">
                  <span className="flex gap-1 justify-center items-center text-yellow-500">
                    <Star stars={res?.vote_average / 2} />
                  </span>
                  <span className=" font-bold">{res.vote_average}</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center px-2">
                  {res.genre_ids.map((genId, idx) => (
                    <span
                      key={idx}
                      className="px-2 outline outline-1 rounded-md"
                    >
                      {Genres?.genres?.find(({ id }) => id === genId)?.name}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default Card;
