import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../features/apiSlice";
import { BiLinkExternal } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { strokecolor, time, currency } from "../utils/index";

function Details() {
  let { type, id } = useParams();
  const { data, isLoading } = useGetDetailsQuery({ type: type, id: id });
  if (!isLoading) console.log(data);

  return (
    <div>
      {!isLoading && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="background poster"
            className="object-cover min-w-full h-screen fixed -z-10"
          />
          <div className="fixed -z-10 inset-0 w-full h-screen bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative pt-16 h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex items-center justify-between ">
            <div className="flex flex-col gap-6  justify-center h-full items-start">
              <div className="text-3xl font-bold text-gray-300 flex gap-4">
                <span>{data.release_date}</span>
                <span className="text-blue-400">({data.status})</span>
              </div>
              <h3 className="text-7xl font-extrabold tracking-wider text-left pr-10">
                {data.title ? data.title : data.name}
              </h3>
              <span className="font-bold">
                Tagline:{" "}
                <span className="text-blue-400 text-3xl ">{data.tagline}</span>
              </span>
              <div className=" flex items-center gap-4">
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
                      strokeDashoffset={
                        126 - (126 * data.vote_average * 10) / 100
                      }
                      strokeLinecap="round"
                    ></circle>
                  </svg>
                  <div className="text-sm w-full h-full text-white tracking-wide absolute top-0 left-0 flex justify-center items-center">
                    <span>{data.vote_average.toFixed(2)}</span>
                  </div>
                </div>
                <div className="text-white">{data.vote_count} VOTES</div>
                <button className="flex items-center justify-center gap-2 px-6 py-2 hover:outline outline-2 rounded-2xl outline-blue-400">
                  <span>
                    <FcLikePlaceholder color="" size={25} />
                  </span>
                  Add to favorites
                </button>
                {data.homepage && (
                  <button className="gap-2 px-6 py-2 outline outline-2 rounded-2xl outline-gray-400 flex items-center">
                    <BiLinkExternal size={18} />
                    <a
                      href={data.homepage}
                      className="text-gray-600 text-xl font-bold"
                    >
                      Official Page
                    </a>
                  </button>
                )}
              </div>
            </div>
            <div className="hidden lg:block shadow-2xl ">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt="poster"
                className=" max-w-[225px] rounded-md"
              />
            </div>
            <span className="absolute bottom-10 left-1/2">
              <BsChevronDoubleDown size={30} />
            </span>
          </div>
          <div className="pb-10 text-left text-white mt-5 py-10 flex flex-col gap-6 text-lg  max-w-7xl mx-auto backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 ">
            <div className="mt-5 flex-col justify-start tracking-widest">
              <div className="flex-col text-left">
                <h3 className="text-gray-200 text-4xl">{data.title}</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {data.genres.map((gen) => (
                    <span
                      key={gen.id}
                      className="px-4 py-1 text-gray-300 text-sm outline outline-2 outline-blue-300 rounded-2xl"
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
            <div className="flex gap-6">
              <span>
                Runtime: <span className="text-3xl">{time(data.runtime)}</span>
              </span>
              <span>
                Status: <span className="text-3xl">{data.status}</span>
              </span>
            </div>
            <div className="flex gap-2 items-baseline">
              <span>Spoken Languages:</span>
              {data.spoken_languages.map((lang) => (
                <span key={lang.english_name} className="text-2xl">
                  {lang.english_name},
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              <p>
                Budget:{" "}
                <span className="text-2xl">{currency(data.budget)}</span>
              </p>
              <p>
                Revenue:{" "}
                <span className="text-2xl">{currency(data.revenue)}</span>
              </p>
            </div>
            {data.belongs_to_collection && (
              <div className="">
                Belongs to:
                <span className="text-2xl">
                  {" "}
                  {data.belongs_to_collection?.name}
                </span>
                <img
                  src={`https://image.tmdb.org/t/p/original${data.belongs_to_collection?.poster_path}`}
                  alt="collection poster"
                  className="max-w-xl mx-auto"
                />
              </div>
            )}
            <div>
              Production Countrie(s):
              {data.production_countries.map((pc, idx) => (
                <span key={idx}>
                  {pc.name} ({pc.iso_3166_1})
                </span>
              ))}
            </div>
            <div>
              Companie(s) :
              <div className="flex gap-10 justify-center ">
                {data.production_companies.map((comp) => (
                  <p
                    className="w-40 backdrop-blur-lg rounded-md text-center"
                    key={comp.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${comp.logo_path}`}
                      alt="logo"
                    />
                    <span className="text-xl">{comp.name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;

