import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { MoviesList } from "./MoviesList";
import { MovieItem } from "./MovieItem";
import { MoviesSummary } from "./MoviesSummary";
import { MovieWatchedItem } from "./MovieWatchedItem";
import { Box } from "./Box";
import axios from "axios";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Main({movies}){
  const [watched, setWatched] = useState([]);

  return (
    <main className="main">

        <Box>
          <MoviesList>
            {movies?.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
          </MoviesList>
        </Box>

        <Box>
          <>
            <MoviesSummary watched={watched} />

            <MoviesList movies={movies}>
              {watched.map((movie) => <MovieWatchedItem key={movie.imdbID} movie={movie}/>)}
            </MoviesList>
          </>
        </Box>
        
      </main>
  )
}


function Loader(){
  return (
    <p>Loading ...</p>
  )
}

const apiKey = 'df071886'

export default function App() {
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect( () => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=enter&y=2022`);
      const movies = data?.data?.Search
      setMovies(movies)
      setIsLoading(false)
    }

    fetchData()
    

  }, [])

  return (
    <>
      
      <Navbar movies={movies} />
      {isLoading ? <Loader /> : <Main movies={movies} /> }
      
      
    </>
  );
}
