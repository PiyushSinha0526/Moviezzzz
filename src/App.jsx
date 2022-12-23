import './App.css'
import { useGetAllMoviesQuery } from './features/apiSlice'
function App() {
const { data, isSuccess } = useGetAllMoviesQuery()
console.log(data)
  return (
    <div className="App">
      {isSuccess && data && data.results.map(movie=> <h1 key={movie.id}>{movie.titleText.text}</h1>)}
    </div>
  )
}

export default App
