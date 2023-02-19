import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../features/apiSlice";
import { BiLinkExternal } from "react-icons/bi";
import { strokecolor } from "../utils/index";
import time from "../utils/time";

function Details() {
  let { type, id } = useParams();
  const { data, isLoading } = useGetDetailsQuery({ type: type, id: id });
  if (!isLoading) console.log(data);

  return (
    <div>
      {!isLoading && (
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="background poster"
            className="object-cover min-w-full h-screen fixed -z-10"
          />
          <div className="fixed -z-10 inset-0 w-full h-screen bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative pt-16 h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex items-center ">
            <div className="flex flex-col gap-6  justify-center h-full items-start">
              <span className="text-3xl font-bold ">{data.release_date}</span>
              <h3 className="text-7xl font-extrabold tracking-wider text-left pr-10">
                {data.title}
              </h3>
              <span className="text-3xl font-bold">{data.tagline}</span>
              <span className="mt-2">
                <a
                  href={data.homepage}
                  className="text-black text-xl border-2 px-4 py-1 font-bold bg-white rounded-md"
                >
                  Official Page
                </a>
              </span>
            </div>
            <div className="hidden lg:block shadow-2xl ">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt="poster"
                className=" max-w-[225px] rounded-md"
              />
            </div>
            <span className="absolute bottom-10 left-1/2">down</span>
          </div>
          <div className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white mt-5 py-10 rounded-md flex flex-col gap-6 text-lg">
            <div className="mt-5 flex-col justify-start tracking-widest">
              <div className="flex-col text-left">
                <h3 className="text-gray-200 text-4xl">{data.title}</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {data.genres.map((gen) => (
                    <span
                      key={gen.id}
                      className="text-gray-300 text-sm outline outline-2 px-4 py-1 rounded-2xl"
                    >
                      {gen.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-start ">
              <span>Storyline</span>
              <p className="text-gray-400">{data.overview}</p>
            </div>
            <span>Runtime: {time(data.runtime)}</span>
            <span>Status: {data.status}</span>
            <div
              className="flex flex-col gap-2
            "
            >
              {data.spoken_languages.map((lang) => (
                <span key={lang.name}>{lang.english_name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;

{
  /* <div className="flex flex-wrap gap-2 justify-center px-2">
  {res.genre_ids.map((genId, idx) => (
    <span
      key={idx}
      className="px-1 font-bold tracking-wide text-xs outline outline-1 rounded-md"
    >
      {Genres?.genres?.find(({ id }) => id === genId)?.name}
    </span>
  ))}
</div> */
}

{
  /* <span className="flex gap-1 justify-center items-center text-yellow-500">
        <Star stars={res?.vote_average / 2} />
      </span> */
}
{
  /* <span className=" font-bold">{res.vote_average}</span> */
}

{
  /* <div className="mt-5 ml-10 px-10 flex-col justify-start tracking-widest">
  <div className="flex-col text-left">
    <h3 className="text-gray-200 text-4xl">{data.title}</h3>
    <div className="flex flex-wrap gap-3 mt-4">
      {data.genres.map((gen) => (
        <span
          key={gen.id}
          className="text-gray-300 text-sm outline outline-2 px-4 py-1 rounded-2xl"
        >
          {gen.name}
        </span>
      ))}
    </div>
  </div>
</div>; */
}

{
  /* <div className=" flex items-center gap-4">
  <div className=" w-12 h-12 relative">
    <svg className="w-12 h-12 bg-black rotate-[270deg] rounded-full">
      <circle
        cx={20}
        cy={20}
        r={20}
        className={`w-12 h-12 fill-none stroke-[4] translate-x-1 translate-y-1 ${strokecolor(
          data?.vote_average
        )}`}
        strokeDasharray="126"
        strokeDashoffset={126 - (126 * data.vote_average * 10) / 100}
        strokeLinecap="round"
      ></circle>
    </svg>
    <div className="text-sm w-full h-full text-white tracking-wide absolute top-0 left-0 flex justify-center items-center">
      <span>{data.vote_average.toFixed(2)}</span>
    </div>
  </div>
  <div className="text-white">{data.vote_count} VOTES</div>
</div>; */
}
