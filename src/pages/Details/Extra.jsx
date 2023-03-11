import React from "react";
import noimage from "../../assets/noimage.png";

function Extra({ data }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        {data?.first_air_date && (
          <span>
            First air date:
            <span className="text-3xl"> {data?.first_air_date}</span>
          </span>
        )}
        {data?.last_air_date && (
          <span>
            Last air date:
            <span className="text-3xl"> {data?.last_air_date}</span>
          </span>
        )}
        {data?.number_of_episodes && (
          <span>
            Number of Episodes:
            <span className="text-3xl"> {data?.number_of_episodes}</span>
          </span>
        )}
        {data?.number_of_seasons && (
          <span>
            Number of Seasons:
            <span className="text-3xl"> {data?.number_of_seasons}</span>
          </span>
        )}
        {data?.seasons && (
          <div>
            Relation:
            <div className="flex gap-4 flex-wrap">
              {data?.seasons.map((sea) => (
                <div
                  key={sea.id}
                  className="w-64 bg-gray-800 px-6 py-2 flex flex-col justify-between"
                >
                  {sea.poster_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/original${sea.poster_path}`}
                      alt="logo"
                      className="h-64"
                    />
                  ) : (
                    <img src={noimage} />
                  )}
                  <div className="flex flex-col justify-center items-center">
                    <span className="bg-transparent  w-full text-center bg bg-black">
                      {sea.name}
                    </span>
                    <span>Episode: {sea.episode_count}</span>
                    {sea.air_date && <span>Air Date: {sea.air_date}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {data?.created_by && (
          <div>
            Created By:
            <div className="flex gap-6 text-center flex-wrap">
              {data?.created_by.map((cb) => (
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
    </>
  );
}

export default Extra;
