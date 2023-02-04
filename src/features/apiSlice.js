import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_REACT_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => `trending/all/day?api_key=${apiKey}`,
    }),
    getPopular: builder.query({
      query: () => `movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getTopRated: builder.query({
      query: () => `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getSimilarMovies: builder.query({
      query: (id) =>
        `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getRecommendations: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getDetails: builder.query({
      query: (id) => `movie/${id}/?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getCredits: builder.query({
      query: (id) =>
        `movie/${id}/credits?api_key=${apiKey}&language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetSimilarMoviesQuery,
  useGetRecommendationsQuery,
  useGetDetailsQuery,
  useGetCreditsQuery,
} = moviesApi;
