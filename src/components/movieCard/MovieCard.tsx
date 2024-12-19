import { Link } from "react-router-dom";
import IMovie from "../../interfaces/IMovie";

interface IMovieCardProps {
    singleMovie: IMovie
}

const MovieCard: React.FC<IMovieCardProps> = ({ singleMovie }) => {
    return (  
        <Link to={`/movieDetails/${singleMovie.title}`}>
            <article className="movie__card">
                <h3>{ singleMovie.title }</h3>
                <h3>{ singleMovie.year }</h3>
                <h3>{ singleMovie.director }</h3>
                <h3>{ singleMovie.duration }</h3>
                <h3>{ singleMovie.rate }</h3>
                <ul className="genre">
                    { singleMovie.genre.map((genre, index) => (
                        <li key={ index }>{ genre }</li>
                    )) }
                </ul>
            </article>
        </Link>
    );
}

export default MovieCard;