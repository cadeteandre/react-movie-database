import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import RootLayout from './rootLayout/RootLayout'
import { useEffect, useState } from 'react'
import IMovie from './interfaces/IMovie'
import moviesData from './data/moviesData'

function App() {

  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const [moviesChanged, setMoviesChanged] = useState<boolean>(false);

  useEffect(() => {
    const showMovies = () => {
      const data = movies ? movies : moviesData;
      setMovies(data);
    }
    showMovies();
  }, [movies, moviesChanged])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <RootLayout movies={movies} setMovies={ setMovies } moviesChanged={moviesChanged} setMoviesChanged={setMoviesChanged} /> }>
        <Route index element={ <Home movies={ movies } /> } />
        {/* <Route path='movieDetails' element={ <Home /> } /> */}
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
