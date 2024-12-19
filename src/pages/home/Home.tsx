import MovieList from "../../components/movieList/MovieList";
import IMovie from "../../interfaces/IMovie";

interface IHomeProps {
    movies: IMovie[] | null
}

const Home: React.FC<IHomeProps> = ({ movies }) => {
    return (  
        <>
            <section className="show__movies grid">
                <MovieList movies={ movies } />
            </section>
        </>
    );
}

export default Home;