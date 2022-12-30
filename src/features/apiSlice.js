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
      query: (id) => `movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getRecommendations: builder.query({
      query: (id) => `movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getDetails: builder.query({
      query: (id) => `movie/${id}/?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getCredits: builder.query({
      query: (id) => `movie/${id}/credits?api_key=${apiKey}&language=en-US&page=1`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetPopularQuery, useGetTopRatedQuery, useGetSimilarMoviesQuery, useGetRecommendationsQuery , useGetDetailsQuery, getCredits} =
  moviesApi;

// https://api.themoviedb.org/3/movie/550?api_key=43d5de6dd96fa39074eb7859640dfb35

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Q1ZGU2ZGQ5NmZhMzkwNzRlYjc4NTk2NDBkZmIzNSIsInN1YiI6IjYzYTQ4N2IxNDM1MDExMDA4NjlhYWZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UZZVYLm5HWzY2H0S5H3u1ojyyiApYPkPAXgyYY9IM3c
