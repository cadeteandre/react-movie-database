import IMovie from "../../interfaces/IMovie";
import MovieCard from "../movieCard/MovieCard";

interface IMovieListProps {
    movies: IMovie[] | null
}

const MovieList: React.FC<IMovieListProps> = ({ movies }) => {

    if(!movies) return <p>Loading...</p>
    return ( 
        <>
            {movies.map((singleMovie) => (
                <MovieCard singleMovie={singleMovie} />
            ))}
        </>
    );
}

export default MovieList;