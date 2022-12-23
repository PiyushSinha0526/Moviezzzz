import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiHeader = {
  'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
  'x-rapidapi-key': import.meta.env.VITE_REACT_API_KEY,
};

const createRequest = (url) => ({ url, headers: apiHeader});

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://moviesdatabase.p.rapidapi.com'
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => createRequest('titles')
    })
  })
})

export const { useGetAllMoviesQuery } = moviesApi;