import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Carousel({ slides, isLoading }) {
  const [currSlide, setCurrSlide] = useState(0);
  console.log(slides?.results);
  const prevSlide = () =>
    setCurrSlide((prev) =>
      prev === 0 ? slides?.results.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrSlide((prev) =>
      prev === slides?.results.length - 1 ? 0 : prev + 1
    );

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
              <div className="absolute z-10 inset-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute top-0 h-full z-20 grid grid-rows-5 px-40 ">
                <div className="row-start-2 row-end-4 text-left  ">
                  <span className="font-bold text-3xl text-white text-shadow">
                    Release Date : {movie.release_date}
                  </span>
                  <p className="w-3/5 text-white mt-6 text-xl text-shadow">
                    {movie.overview}
                  </p>
                  <button
                    className="cursor-pointer mt-6 border-blue-400 border-2 px-6 py-2 pr-8 rounded-2xl font-bold relative
                  "
                  >
                    More{" "}
                    <span className="absolute right-[10px] top-3">
                      <BsChevronCompactRight />
                    </span>
                  </button>
                </div>
                <h3 className="row-start-5 text-6xl font-bold text-white text-right text-shadow-white">
                  {movie.title ? movie.title : movie.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center ">
        <button
          onClick={prevSlide}
          className="text-6xl font-bold p-2 active:scale-90 mx-8 rounded-full hover:outline outline-2 outline-blue-400 hover:backdrop-blur-sm s"
        >
          <BsChevronCompactLeft color="white" />
        </button>
        <button
          onClick={nextSlide}
          className="text-6xl font-bold p-2 active:scale-90 h-full mx-8 rounded-full hover:outline outline-2 outline-blue-400 hover:backdrop-blur-sm"
        >
          <BsChevronCompactRight color="white" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
