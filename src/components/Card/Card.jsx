import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

function Card({ data }) {
  const strokecolor = (ratingValue) => {
    return ratingValue >= 7
      ? "stroke-green-500"
      : ratingValue >= 5 && ratingValue < 7
      ? "stroke-yellow-500"
      : ratingValue < 5
      ? "stroke-red-500"
      : "";
  };
  return (
    <>
      {
        <ul className="flex gap-y-16 gap-x-6 flex-wrap justify-center">
          {data?.results?.map((res) => (
            <li
              key={res.id}
              className="relative w-[15rem] h-80 bg-gray-800 rounded-md hover:scale-105 ease-in-out duration-300"
            >
              <Link
                to={`details/${res.id}`}
                className="flex flex-col justify-start items-center"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                  alt=""
                  className="h-64 w-44 absolute -top-6 rounded-md"
                />
                <div className=" h-60 w-full"></div>
                <div className="text-base p-2 font-bold text-white">
                  <span className="tracking-wider">
                    {res.title ? res.title : res.name}
                  </span>
                </div>
                <div className="absolute bottom-64 left-[0.125rem]">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 bg-gray-800 rotate-[270deg] outline outline-2 outline-gray-800 rounded-full">
                      <circle
                        cx={20}
                        cy={20}
                        r={20}
                        className="w-12 h-12 fill-none stroke-2 stroke-gray-500 translate-x-1 translate-y-1"
                        strokeDasharray="126"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      ></circle>
                      <circle
                        cx={20}
                        cy={20}
                        r={20}
                        className={`w-12 h-12 fill-none stroke-[3] translate-x-1 translate-y-1 ${strokecolor(
                          res?.vote_average
                        )}`}
                        strokeDasharray="126"
                        strokeDashoffset={
                          126 - (126 * res.vote_average * 10) / 100
                        }
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center tracking-wide text-white">
                      <h2>{res.vote_average}</h2>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[4.5rem] right-1 p-2 bg-gray-800 rounded-full hover:scale-105  hover:border-2 border-red-300 active:scale-95 duration-300 ease-in-out ">
                  <FcLikePlaceholder size={28} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
}

export default Card;
