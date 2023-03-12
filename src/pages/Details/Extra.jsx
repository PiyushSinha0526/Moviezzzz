import React from "react";
import noimage from "../../assets/noimage.png";
import { QuickCard } from "../../components";

function Extra({ data, similar, recommend, Credit }) {
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
        {data?.created_by?.length > 0 && (
          <div>
            Created By:
            <div className="flex gap-6 text-center flex-wrap">
              {data?.created_by?.map((cb) => (
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
        <div>
          Cast:
          <div className="pt-2 flex flex-wrap gap-4 md:grid grid-cols-3">
            {Credit?.cast?.slice(0, 12).map((ca) => (
              <div className="flex gap-3 items-center" key={ca.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${ca.profile_path}`}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover origin-top"
                />
                <div className="flex flex-col">
                  <span>{ca.original_name}</span>
                  <span>{ca.character}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {recommend?.results.length > 0 && (
          <div>
            Recommend :
            <div className="h-80 overflow-y-auto flex flex-col w-full gap-4 grid-cols-2 md:grid md:w-full lg:grid-cols-3 border-2 p-4 rounded-md">
              {recommend?.results?.slice(0, 12).map((rec) => (
                <QuickCard data={rec} key={rec.id} />
              ))}
            </div>
          </div>
        )}
        {similar?.results.length > 0 && (
          <div>
            Similar :
            <div className="h-80 overflow-y-auto flex flex-col w-full gap-4 grid-cols-2 md:grid md:w-full lg:grid-cols-3 border-2 p-4 rounded-md">
              {similar?.results?.slice(0, 12).map((rec) => (
                <QuickCard data={rec} key={rec.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Extra;
