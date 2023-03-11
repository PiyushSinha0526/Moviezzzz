import React from "react";
import { useParams } from "react-router-dom";
import QueryCard from "../components/Card/QueryCard";
import useRealTimeList from "../hooks/useRealTimeList";
import {
  useGetMovieSearchQuery,
  useGetTvSearchQuery,
} from "../features/apiSlice";

function Search() {
  let { query } = useParams();
  const { data: movies, isLoading: isMovieLoading } = useGetMovieSearchQuery({
    query: query,
  });
  const { data: tvs, isLoading: isTvLoading } = useGetTvSearchQuery({
    query: query,
  });

  const fsData = useRealTimeList();

  return (
    <div className="pt-20">
      <h1 className="text-3xl mb-12 text-left pl-28">Search "{query}"</h1>
      {!isMovieLoading && (
        <div className="flex flex-wrap  gap-4 justify-center">
          {movies?.results?.map((res, idx) => (
            <QueryCard
              data={res}
              favourite={fsData?.favourite?.movie}
              type="movie"
              id={res.id}
              category={'movie'}
              key={res.id + idx}
            />
          ))}
        </div>
      )}
      <br />
      <h1 className="text-3xl mb-12 text-left pl-28">tv</h1>

      {!isTvLoading && (
        <div className="flex flex-wrap  gap-4 justify-center">
          {tvs?.results?.map((res, idx) => (
            <QueryCard
              data={res}
              favourite={fsData?.favourite?.movie}
              type="tv"
              id={res.id}
              category={'tv'}
              key={res.id + idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
