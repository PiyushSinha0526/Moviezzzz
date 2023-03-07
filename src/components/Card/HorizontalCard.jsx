import React from "react";
import { Tooltip } from "react-tooltip";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdWatchLater } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { useGetSingleQuery } from "../../features/apiSlice";
import useRealTimeList from "../../hooks/useRealTimeList";
import {
  addToCompleteList,
  removeFromCompleteList,
  addToWatchList,
  removeFromWatchList,
  removeItem,
  addItem,
  time,
} from "../../utils";

function HorizontalCard({ type, id, category }) {
  const { data, isLoading } = useGetSingleQuery({ type: type, id: id });
  const fsData = useRealTimeList();

  const favouriteList = (id) => {
    return fsData?.favourite?.[type].includes(id);
  };
  const watchlist = (id) => {
    return fsData?.watchlist?.[type].includes(id);
  };
  const completeList = (id) => {
    return fsData?.completed?.[type].includes(id);
  };

  if (isLoading) return <h2>Loading</h2>;
  return (
    <>
      <div className="min-w-[280px] p-2 bg-gray-800 rounded-md gap-3 items-center flex flex-col md:w-auto lg:flex-row lg:p-2">
        <div className="min-w-[160px]">
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="poster"
            className="w-40 rounded-tl-md rounded-bl-md"
          />
        </div>
        <div className="flex flex-col items-start text-left w-full">
          <h3 className="text-xl text-blue-400 line-clamp-1">
            {data.title ? data.title : data.name}
          </h3>
          <div className="flex flex-col lg:gap-2 lg:flex-row">
            <span>
              Release date:{" "}
              <span className="text-xl text-blue-400">
                {data.release_date ? data.release_date : data.first_air_date}
              </span>
            </span>
            <span>
              Rating:{" "}
              <span className="text-xl text-blue-400">
                {data.vote_average.toFixed(2)}
              </span>
            </span>
          </div>
          <div className="w-full pr-2 flex gap-4 items-center justify-between">
            <span>
              {data.runtime ? (
                <span>
                  Runtime:{" "}
                  <span className="text-xl text-blue-400">
                    {time(data.runtime)}
                  </span>
                </span>
              ) : (
                <span>
                  Episode Runtime:{" "}
                  <span className="text-xl text-blue-400">
                    {time(data.episode_run_time)}
                  </span>
                </span>
              )}
            </span>
            <div className="flex gap-2 items-center">
              <span>
                {favouriteList(data.id) ? (
                  category == "favourite" && (
                    <span
                      className="flex gap-2"
                      onClick={(e) => removeItem(e, data.id, type)}
                      data-tooltip-id={data.id}
                      data-tooltip-content="remove"
                      data-tooltip-place="left"
                      data-tooltip-delay-hide={300}
                    >
                      <FcLike size={28} style={{ color: "grey" }} />
                      <Tooltip id={data.id} className="absolute" />
                    </span>
                  )
                ) : (
                  <span
                    className="flex gap-2"
                    onClick={(e) => addItem(e, data.id, type)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="like"
                    data-tooltip-place="top"
                    data-tooltip-delay-hide={300}
                  >
                    <FcLikePlaceholder size={28} />
                    <Tooltip id={data.id} className="absolute" />
                  </span>
                )}
              </span>
              <span>
                {watchlist(data.id) ? (
                  category == "watchlist" && (
                    <span
                      className="flex gap-2"
                      onClick={(e) => removeFromWatchList(e, data.id, type)}
                    >
                      <MdWatchLater size={28} style={{ color: "gray" }} />
                    </span>
                  )
                ) : (
                  <span
                    className="flex gap-2"
                    onClick={(e) => addToWatchList(e, data.id, type)}
                  >
                    <MdWatchLater size={28} />
                  </span>
                )}
              </span>
              <span>
                {completeList(data.id) ? (
                  category == "completed" && (
                    <span
                      className="flex gap-2"
                      onClick={(e) => removeFromCompleteList(e, data.id, type)}
                    >
                      <BsCheckCircle size={22} style={{ color: "green" }} />
                    </span>
                  )
                ) : (
                  <span
                    className="flex gap-2"
                    onClick={(e) => addToCompleteList(e, data.id, type)}
                  >
                    <BsCheckCircle size={22} />
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
