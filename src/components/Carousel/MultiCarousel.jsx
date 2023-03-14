import React, { useState } from "react";
import noimage from "../../assets/noimage.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function MultiCarousel({ slides, type, isLoading }) {
  console.log(slides);
  const [currSlide, setCurrSlide] = useState(0);
  const prevSlide = () =>
    setCurrSlide((prev) => (prev - 1 < 0 ? prev : prev - 1));

  const nextSlide = () => {
    let x = 1;
    if (window.innerWidth > 1180) x = 4;
    else if (window.innerWidth > 880) x = 3;
    else if (window.innerWidth > 600) x = 2;
    setCurrSlide((prev) =>
      prev + x > slides?.results.length - 1 ? prev : prev + 1
    );
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000 gap-4"
        style={{ transform: `translateX(-${currSlide * (260 + 16)}px)` }}
      >
        {!isLoading &&
          slides?.results.map((data) => (
            <Link to={`/${type}/details/${data.id}`}>
              <div className="min-w-[260px]" key={data.id}>
                {data.poster_path != null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt=""
                    className="object-cover w-72 h-80 rounded-md border border-blue-400"
                  />
                ) : (
                  <img
                    src={noimage}
                    className="h-80 object-cover border border-blue-400"
                  />
                )}
                <div className=" ">
                  <h3 className="">{data.title ? data.title : data.name}</h3>
                  <div className="">
                    <p className="">
                      Release Date :{" "}
                      <span className="font-bold text-blue-400">
                        {data.release_date
                          ? data.release_date
                          : data.first_air_date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className=" p-2 text-3xl font-bold shadow-lg mx-1 active:scale-90 rounded-full hover:bg-blue-400 pointer-events-auto bg-gray-700"
        >
          <BsChevronCompactLeft color="white" />
        </button>
        <button
          onClick={nextSlide}
          className=" p-2 text-3xl font-bold shadow-lg mx-1  active:scale-90 rounded-full hover:bg-blue-400 pointer-events-auto bg-gray-700"
        >
          <BsChevronCompactRight color="white" />
        </button>
      </div>
    </div>
  );
}

export default MultiCarousel;
