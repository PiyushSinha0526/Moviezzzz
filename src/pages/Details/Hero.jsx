import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import useRealTimeList from "../../hooks/useRealTimeList";
import { addItem, removeItem, strokecolor } from "../../utils/index";
function Hero({ data, type }) {
  const fsData = useRealTimeList();

  const isfav = (id) => {
    return fsData?.favourite?.[type].includes(id);
  };
  return (
    <>
      <div className="relative pt-16 h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex items-center justify-between ">
        <div className="flex flex-col gap-6  justify-center h-full items-start">
          <div className="text-3xl font-bold text-gray-300 flex gap-4">
            {data.release_date && <span>{data.release_date}</span>}
            <span className="text-blue-400">({data.status})</span>
          </div>
          <h3 className="text-7xl font-extrabold tracking-wider text-left pr-10">
            {data.title ? data.title : data.name}
          </h3>
          {data.tagline && (
            <span className="font-bold">
              Tagline:{" "}
              <span className="text-blue-400 text-3xl ">{data.tagline}</span>
            </span>
          )}
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
                  strokeDashoffset={126 - (126 * data.vote_average * 10) / 100}
                  strokeLinecap="round"
                ></circle>
              </svg>
              <div className="text-sm w-full h-full text-white tracking-wide absolute top-0 left-0 flex justify-center items-center">
                <span>{data.vote_average.toFixed(2)}</span>
              </div>
            </div>
            <div className="text-white">{data.vote_count} VOTES</div>
            <button className="flex items-center justify-center gap-2 px-6 py-2 hover:outline outline-2 rounded-2xl outline-blue-400">
              {isfav(data.id) ? (
                <span
                  className="flex gap-2"
                  onClick={(e) => removeItem(e, data.id, type)}
                >
                  <FcLike size={25} />
                  remove from favourites
                </span>
              ) : (
                <span
                  className="flex gap-2"
                  onClick={(e) => addItem(e, data.id, type)}
                >
                  <FcLikePlaceholder size={25} />
                  Add to favourites
                </span>
              )}
            </button>
            {data.homepage && (
              <button className="gap-2 px-6 py-2 outline outline-2 rounded-2xl outline-gray-400 flex items-center">
                <BiLinkExternal size={18} />
                <a
                  href={data.homepage}
                  target="_blank"
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
    </>
  );
}

export default Hero;
