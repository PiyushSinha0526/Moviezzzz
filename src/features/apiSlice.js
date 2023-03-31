import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey =
  import.meta.env.VITE_REACT_API_KEY || "43d5de6dd96fa39074eb7859640dfb35";

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
      query: ({ type, page }) =>
        `${type}/popular?api_key=${apiKey}&language=en-US&page=${page}`,
    }),
    getTopRated: builder.query({
      query: () => `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getSimilarMovies: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getRecommendations: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getDetails: builder.query({
      query: ({ type, id }) => `${type}/${id}?api_key=${apiKey}&language=en-US`,
    }),
    getCredits: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/credits?api_key=${apiKey}&language=en-US&page=1`,
    }),
    getLanguages: builder.query({
      query: () => `configuration/languages?api_key=${apiKey}`,
    }),
    getSingle: builder.query({
      query: ({ type, id }) =>
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`,
    }),
    getMovieSearch: builder.query({
      query: ({ query, page }) =>
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
    }),
    getTvSearch: builder.query({
      query: ({ query, page }) =>
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&page=${page}`,
    }),
  }),
});

export const {
  useGetTrendingQuery, //
  useGetPopularQuery, //
  // useGetTopRatedQuery,
  useGetSimilarMoviesQuery, //
  useGetRecommendationsQuery, //
  useGetCreditsQuery, //
  useGetDetailsQuery, //
  useGetLanguagesQuery, //
  useGetSingleQuery, //
  useGetMovieSearchQuery, //
  useGetTvSearchQuery, //
} = moviesApi;
