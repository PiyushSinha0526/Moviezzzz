import React from "react";
import { Card } from "../components";
import { useGetGenresQuery, useGetPopularQuery } from "../features/apiSlice";

function Movies() {
  const { data, isLoading } = useGetPopularQuery();
  const { data: Genres, isGenLoading } = useGetGenresQuery();
  return (
    <div className="bg-gray-700 min-h-screen pt-14 pb-6">
      <div className="text-white w-full mt-6">
        <input
          type="text"
          placeholder="search ..."
          className="w-96 py-1 px-4 rounded-md"
        />
      </div>
      {/* card */}
      <div className=" mt-24">
        {!isLoading && <Card data={data} Genres={!isGenLoading && Genres} />}
      </div>
    </div>
  );
}

export default Movies;
