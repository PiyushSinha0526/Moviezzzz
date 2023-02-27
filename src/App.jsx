import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Details, Favourite, Home, Movie, Tv } from "./pages";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/auth" element={<Auth />} />
        <Route path=":type/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
