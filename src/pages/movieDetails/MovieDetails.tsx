import { useParams } from "react-router-dom";
import IMovie from "../../interfaces/IMovie";
import moviesData from "../../data/moviesData";

interface IMoviesDetailsProps {
    movies: IMovie[] | null
}

const MovieDetails: React.FC<IMoviesDetailsProps> = ({ movies }) => {

    const { movieID } = useParams();

    const findMovieByTitle = moviesData.find((singleMovie) => movieID === singleMovie.title);

    return (  
        <section className="movie__details">
            {movies && findMovieByTitle ? (
                <article className="movie__card">
                    <h3>{ findMovieByTitle.title }</h3>
                    <h3>{ findMovieByTitle.year }</h3>
                    <h3>{ findMovieByTitle.director }</h3>
                    <h3>{ findMovieByTitle.duration }</h3>
                    <h3>{ findMovieByTitle.rate }</h3>
                    <ul className="genre">
                        { findMovieByTitle.genre.map((genre, index) => (
                            <li key={ index }>{ genre }</li>
                        )) }
                    </ul>
                </article>
            ) : <p>Loading...</p>}
        </section>
    );
}

export default MovieDetails;