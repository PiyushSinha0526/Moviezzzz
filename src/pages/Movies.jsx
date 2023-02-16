import React, { useState } from "react";
import { Card } from "../components";
import { useGetPopularQuery } from "../features/apiSlice";

function Movies() {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetPopularQuery({type: "movie", page: page});

  const paging =(i) => {
    if(page+i<1) return
    if(page+i>data?.total_pages) return
    setPage(prev=> prev+i)
  }

  return (
    <div className="bg-gray-900 00 min-h-screen py-16 px-5">
      <div className="text-gray-300 w-full mt-6">
        <input
          type="text"
          placeholder="search ..."
          className="w-96 py-1 px-4 rounded-md bg-gray-600 outline-blue-400"
        />
      </div>
      {/* card */}
      <div className=" mt-16">
        {!isLoading && <Card data={data} />}
      </div>
      <div className="fixed left-0 right-0 bottom-6 text-black font-bold flex gap-2  justify-center">
        <button className="bg-blue-300 px-3 py-1 rounded-md tracking-wider" onClick={()=> paging(-1)}>Prev</button>
        <button className="bg-blue-300 px-3 py-1 rounded-md tracking-wider" onClick={()=> paging(1)}>Next</button>
      </div>
    </div>
  );
}

export default Movies;
