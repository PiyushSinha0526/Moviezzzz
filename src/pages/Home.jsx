import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { useGetTrendingQuery } from "../features/apiSlice";

function Home() {
  const { data: TrendingData, isLoading } = useGetTrendingQuery();
  return (
    <>
      <Carousel slides={TrendingData} isLoading={isLoading}></Carousel>
    </>
  );
}

export default Home;
