import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, PrivateRoute } from "./components";
import { AuthProvider } from "./context/authContext";
import { Details, Home, Movie, Tv, Library, Search } from "./pages";
import Auth from "./pages/Auth";
import ScrollPageChange from "./utils/ScrollPageChange";

function App() {
  return (
    <div className="App ">
      <AuthProvider>
            <ScrollPageChange />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<Tv />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Library />} path="/library" />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path=":type/details/:id" element={<Details />} />
          <Route path="search/:query" element={<Search />} />
          <Route path="search/:query/:type/details/:id" element={<Details />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
