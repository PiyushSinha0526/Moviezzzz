import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../features/apiSlice";
import Hero from "./Hero";
import Main from "./Main";

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
          <Hero data={data} />
          <div className="pb-10 text-left text-white mt-5 py-10  text-lg  max-w-7xl mx-auto backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col gap-6">
              <Main data={data} />
              <div>
                <span>First air date: {data.first_air_date}</span>
                <span>Last air date: {data.last_air_date}</span>
                <span>Number of Episodes: {data.number_of_episodes}</span>
                <span>Number of Seasons: {data.number_of_seasons}</span>
                {data.seasons && (
                  <div>
                    Relation:{" "}
                    <div>
                      {data.seasons.map((sea) => (
                        <p key={sea.id}>
                          <span>{sea.name}</span>
                          <span>Episode: {sea.episode_count}</span>
                          {sea.air_date && (
                            <span>Air Date: {sea.air_date}</span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {data.created_by && (
                  <div>
                    Created By:
                    <div className="flex gap-6 text-center flex-wrap">
                      {data.created_by.map((cb) => (
                        <p key={cb.credit_id}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${cb.profile_path}`}
                            alt={`profile picture of ${cb.name}`}
                            className="w-52  "
                          />
                          <span>{cb.name}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;

// first_air_date
// last_air_date
// created_by
// number_of_episodes
// number_of_seasons
// seasons
// type
