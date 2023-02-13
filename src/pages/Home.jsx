import React from "react";
import Carousel from "../components/Carousel/Carousel";
import {
  useGetTrendingQuery,
  useGetLanguagesQuery,
} from "../features/apiSlice";

function Home() {
  const { data: TrendingData, isLoading } = useGetTrendingQuery();
  const { data: LanguagesData } = useGetLanguagesQuery();

  return (
    <>
      <Carousel
        slides={TrendingData}
        isLoading={isLoading}
        LanguagesData={LanguagesData}
      ></Carousel>
    </>
  );
}

export default Home;
