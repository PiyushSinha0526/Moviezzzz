import { useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "./features/apiSlice";

function App() {
  const { data, isLoading, isSuccess } = useGetTopRatedQuery();

  return (
    <div className="App">
      {isSuccess &&
        data &&
        data.results.map((movie) => <h1 key={movie.id}>{movie.title}</h1>)}
    </div>
  );
}

export default App;
