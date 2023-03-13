import React from "react";
import { time, currency } from "../../utils/index";
import noimage from "../../assets/noimage.png";

function Main({ data }) {
  return (
    <>
      <div className="sm:mt-5 flex-col justify-start tracking-widest">
        <div className="flex-col text-left">
          <h3 className="hidden sm:block text-gray-200 text-4xl">
            {data?.title ? data?.title : data?.name}
          </h3>
          <div className="flex flex-wrap gap-3 sm:mt-4">
            {data?.genres.map((gen) => (
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
        {data?.overview && <span>Storyline</span>}
        <p className="text-gray-400">{data?.overview}</p>
      </div>
      <div className="flex gap-4 sm:gap-6">
        {data?.runtime ? (
          <span>
            Runtime:{" "}
            <span className="text-2xl sm:text-3xl">{time(data?.runtime)}</span>
          </span>
        ) : (
          <span>
            Episode Runtime:{" "}
            <span className="text-2xl sm:text-3xl">
              {time(data?.episode_run_time)}
            </span>
          </span>
        )}
        <span>
          Status: <span className="text-2xl sm:text-3xl">{data?.status}</span>
        </span>
      </div>
      <div className="flex gap-2 items-baseline">
        {data?.spoken_languages && <span>Spoken Languages:</span>}
        {data?.spoken_languages.map((lang) => (
          <span key={lang.english_name} className="text-2xl">
            {lang.english_name},
          </span>
        ))}
      </div>
      <div className="flex gap-4 sm:gap-6 flex-wrap">
        {data?.budget && (
          <p>
            Budget:{" "}
            <span className="text-xl sm:text-2xl">
              {currency(data?.budget)}
            </span>
          </p>
        )}
        {data?.revenue && (
          <p>
            Revenue:{" "}
            <span className="text-xl sm:text-2xl">
              {currency(data?.revenue)}
            </span>
          </p>
        )}
      </div>
      {data?.belongs_to_collection && (
        <div className="">
          Belongs to:
          <span className="text-xl sm:text-2xl">
            {" "}
            {data?.belongs_to_collection?.name}
          </span>
          <img
            src={`https://image.tmdb.org/t/p/original${data?.belongs_to_collection?.poster_path}`}
            alt="collection poster"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      )}
      {data?.production_countries && (
        <div>
          Production Countrie(s):
          {data?.production_countries.map((pc, idx) => (
            <span key={idx}>
              {pc.name} ({pc.iso_3166_1})
            </span>
          ))}
        </div>
      )}
      {data?.production_companies && (
        <div>
          Companie(s) :
          <div className="flex gap-10 justify-center flex-wrap">
            {data?.production_companies.map((comp) => (
              <p
                className="w-40  p-2 bg-gray-700 backdrop-blur-lg rounded-md text-center flex flex-col flex-wrap justify-between"
                key={comp.id}
              >
                {comp.logo_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${comp.logo_path}`}
                    alt="logo"
                  />
                ) : (
                  <img src={noimage} />
                )}
                <span className="text-xl">{comp.name}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
