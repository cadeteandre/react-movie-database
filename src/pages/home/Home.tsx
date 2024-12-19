import MovieList from "../../components/movieList/MovieList";
import IMovie from "../../interfaces/IMovie";
import "./Home.css";

interface IHomeProps {
    movies: IMovie[] | null
}

const Home: React.FC<IHomeProps> = ({ movies }) => {
    return (  
        <>
            <section className="show__movies">
                <MovieList movies={ movies } />
            </section>
        </>
    );
}

export default Home;