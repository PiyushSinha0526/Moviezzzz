import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Details, Favourite, Home, Movies, Tv } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
