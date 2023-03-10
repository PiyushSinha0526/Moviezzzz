import React, { useEffect, useState } from "react";
import { useGetPopularQuery } from "../features/apiSlice";
import useRealTimeList from "../hooks/useRealTimeList";
import { Card } from "../components";
import { ScrollToTop } from "../utils";

function Movie() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPopularQuery({ type: "movie", page: page });
  const [totalData, setTotalData] = useState([]);
  const fsData = useRealTimeList();

  useEffect(() => {
    if (!isLoading) setTotalData((prev) => [...prev, ...data.results]);
  }, [data]);

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-gray-900 00 min-h-screen py-16 px-5">
      <ScrollToTop />
      {/* card */}
      <div className=" mt-16">
        {!isLoading && (
          <ul className="flex gap-y-16 gap-x-6 flex-wrap justify-center">
            {totalData?.map((res, idx) => {
              return (
                <Card
                  data={res}
                  favourite={fsData?.favourite?.movie}
                  type="movie"
                  key={res.id + idx}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Movie;
