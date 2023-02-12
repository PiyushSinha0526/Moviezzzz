import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

function Carousel({ slides, isLoading, LanguagesData }) {
  const [currSlide, setCurrSlide] = useState(0);
  const prevSlide = () =>
    setCurrSlide((prev) =>
      prev === 0 ? slides?.results.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrSlide((prev) =>
      prev === slides?.results.length - 1 ? 0 : prev + 1
    );
  const hello = () => {
    console.log("hello");
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000 relative "
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {!isLoading &&
          slides?.results.map((movie) => (
            <div className="min-w-full relative" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
                className="object-cover h-screen min-w-full "
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute top-0 w-full h-full grid grid-rows-5 px-40 ">
                <div className="row-start-2 row-end-4 text-left flex flex-col gap-4">
                  <p className=" text-3xl text-white text-shadow">
                    Release Date : <span className="font-bold text-blue-400">{movie.release_date
                      ? movie.release_date
                      : movie.first_air_date}</span>
                    
                  </p>
                  <div className="py-2 text-white capitalize text-shadow flex gap-6 ">
                    <p>Media : <span className="font-bold text-blue-400">{movie.media_type}</span></p>
                    |
                    <p>Language : <span className="font-bold text-blue-400">{LanguagesData?.find(({ iso_639_1 }) => iso_639_1 === movie.original_language)?.english_name}</span></p>
                  </div>
                  <p className="w-3/5 text-white text-xl text-shadow">
                    {movie.overview}
                  </p>
                  <div className="flex items-center gap-4 text-white font-bold mt-6">
                    <button
                      className="relative cursor-pointer px-6 py-2 pr-8 border-2 rounded-2xl hover:border-blue-400 hover:text-blue-400 hover:scale-105"
                      onClick={hello}
                    >
                      More
                      <span className="absolute right-[10px] top-3 ">
                        <BsChevronCompactRight />
                      </span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-2 hover:outline outline-2 rounded-2xl outline-blue-400">
                      <span>
                        <FcLikePlaceholder color="" size={25} />
                      </span>
                      Add to favorites
                    </button>
                  </div>
                </div>
                <h3 className="row-start-5 text-6xl font-bold text-white text-right text-shadow-white">
                  {movie.title ? movie.title : movie.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className="text-6xl font-bold p-2 active:scale-90 mx-8 rounded-full hover:outline outline-2 outline-blue-400 hover:backdrop-blur-sm pointer-events-auto"
        >
          <BsChevronCompactLeft color="white" />
        </button>
        <button
          onClick={nextSlide}
          className="text-6xl font-bold p-2 active:scale-90 mx-8 rounded-full hover:outline outline-2 outline-blue-400 hover:backdrop-blur-sm pointer-events-auto"
        >
          <BsChevronCompactRight color="white" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
