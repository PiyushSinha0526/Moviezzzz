import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRealTimeList from "../hooks/useRealTimeList";
import { FcNext, FcPrevious } from "react-icons/fc";
import {
  useGetMovieSearchQuery,
  useGetTvSearchQuery,
} from "../features/apiSlice";
import { Query } from "../components";

function Search() {
  let { query } = useParams();
  const [pageMovie, setPageMovie] = useState(1);
  const [pageTv, setPageTv] = useState(1);

  const { data: movies, isLoading: isMovieLoading } = useGetMovieSearchQuery({
    query: query,
    page: pageMovie,
  });
  const { data: tvs, isLoading: isTvLoading } = useGetTvSearchQuery({
    query: query,
    page: pageTv,
  });
  const fsData = useRealTimeList();

  const changeMoviesPage = (i) => {
    if (pageMovie + i > movies.total_pages || pageMovie + i == 0) return;
    setPageMovie((prev) => prev + i);
  };

  const changeTvPage = (i) => {
    if (pageTv + i > tvs.total_pages || pageTv + i == 0) return;
    setPageTv((prev) => prev + i);
  };

  return (
    <div className="bg-gray-900">
      <div className="pt-20 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-12 text-left text-white">
          Search <span className="text-blue-400">"{query}"</span>
        </h1>

        {!isMovieLoading && (
          <>
            <h3 className="px-4 mb-4 text-3xl text-left border-l-4 text-white border-blue-400">
              Movie
            </h3>
            <div className="h-80 overflow-y-auto flex flex-col w-full gap-4 grid-cols-2 md:grid md:w-full lg:grid-cols-3 border-4 p-4 rounded-md">
              {movies?.results?.map((res, idx) => (
                <Query
                  data={res}
                  favourite={fsData?.favourite?.movie}
                  type="movie"
                  id={res.id}
                  category={"movie"}
                  key={res.id + idx}
                />
              ))}
            </div>
          </>
        )}
        <div className="text-white flex gap-2 py-2 px-2 ">
          <button
            onClick={() => changeMoviesPage(-1)}
            className="border-2 px-4 py-1 rounded-md hover:bg-gray-700 active:border-blue-400"
          >
            <FcPrevious size={25} />
          </button>
          <button
            onClick={() => changeMoviesPage(1)}
            className="border-2 px-4 py-1 rounded-md hover:bg-gray-700 active:border-blue-400"
          >
            <FcNext size={25} />
          </button>
        </div>

        <div className="h-10"></div>
        {!isTvLoading && (
          <>
            <h3 className="px-4 mb-4 text-3xl text-left border-l-4 text-white border-blue-400">
              Tvs
            </h3>
            <div className="h-80 overflow-y-auto flex flex-col w-full gap-4 grid-cols-2 md:grid md:w-full lg:grid-cols-3 border-4 p-4 rounded-md">
              {tvs?.results?.map((res, idx) => (
                <Query
                  data={res}
                  favourite={fsData?.favourite?.movie}
                  type="tv"
                  id={res.id}
                  category={"tv"}
                  key={res.id + idx}
                />
              ))}
            </div>
          </>
        )}
        <div className="text-white flex gap-2 py-2 px-2 ">
          <button
            onClick={() => changeTvPage(-1)}
            className="border-2 px-4 py-1 rounded-md hover:bg-gray-700 active:border-blue-400"
          >
            <FcPrevious size={25} />
          </button>
          <button
            onClick={() => changeTvPage(1)}
            className="border-2 px-4 py-1 rounded-md hover:bg-gray-700 active:border-blue-400"
          >
            <FcNext size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
