import React from "react";
import { Link } from "react-router-dom";
import { useGetSingleQuery } from "../../features/apiSlice";
import noimage from "../../assets/noimage.png";

function QueryCard({ type, id, category }) {
  const { data, isLoading } = useGetSingleQuery({ type: type, id: id });
  return (
    <>
      {!isLoading && (
        <Link to={`${type}/details/${data?.id}`}>
          <div className="min-w-full md:max-w-md md:w-full items-center bg-gray-800 rounded-md flex gap-4">
            <div>
              {data?.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                  alt="poster"
                  className="w-16 rounded-tl-md rounded-bl-md"
                />
              ) : (
                <img
                  src={noimage}
                  className="w-16 h-[73px] rounded-tl-md rounded-bl-md"
                />
              )}
            </div>
            <div className="flex flex-col items-start text-left w-full">
              <h3 className=" text-blue-400 line-clamp-1">
                {data?.title ? data?.title : data?.name}
              </h3>
              <span className=" text-blue-400">
                {data?.release_date ? data?.release_date : data?.first_air_date}
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default QueryCard;
