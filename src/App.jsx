import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, PrivateRoute } from "./components";
import { AuthProvider } from "./context/authContext";
import Auth from "./pages/Auth";
import ScrollPageChange from "./utils/ScrollPageChange";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details/Details"));
const Movie = lazy(() => import("./pages/Movie"));
const Tv = lazy(() => import("./pages/Tv"));
const Library = lazy(() => import("./pages/Library"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <ScrollPageChange />
        <Navbar />
        <Suspense
          fallback={
            <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
              <span className="animate-spin ">
                <AiOutlineLoading3Quarters size={50} />
              </span>
            </div>
          }
        >
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
            <Route
              path="search/:query/:type/details/:id"
              element={<Details />}
            />
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
