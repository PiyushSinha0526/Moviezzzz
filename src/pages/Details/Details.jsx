import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCreditsQuery,
  useGetDetailsQuery,
  useGetRecommendationsQuery,
  useGetSimilarMoviesQuery,
} from "../../features/apiSlice";
import Hero from "./Hero";
import Main from "./Main";
import Extra from "./Extra";

function Details() {
  let { type, id } = useParams();
  const { data, isLoading } = useGetDetailsQuery({ type: type, id: id });
  const { data: similar } = useGetSimilarMoviesQuery({ type: type, id: id });
  const { data: recommend } = useGetRecommendationsQuery({
    type: type,
    id: id,
  });
  const { data: Credit } = useGetCreditsQuery({
    type: type,
    id: id,
  });

  return (
    <div>
      {!isLoading && (
        <div className="bg-gray-900">
          {data?.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
              alt="background poster"
              className="object-cover min-w-full h-screen min-h-full bg-gray-900  fixed -z-10"
            />
          )}
          <div className="fixed -z-10 inset-0 w-full h-screen min-h-full bg-gradient-to-t from-black to-transparent"></div>
          <Hero data={data} type={type} />
          <div className="pb-10 text-left text-white mt-5 py-10  text-lg  max-w-7xl mx-auto backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col gap-6">
              <Main data={data} />
              <Extra
                data={data}
                type={type}
                similar={similar}
                recommend={recommend}
                Credit={Credit}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
