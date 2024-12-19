// import moviesData from "../../data/moviesData";
import IMovie from "../../interfaces/IMovie";
import "./Header.css";

interface IHeaderProps {
    movies: IMovie[] | null,
    setMovies: React.Dispatch<React.SetStateAction<IMovie[] | null>>,
    moviesChanged: boolean,
    setMoviesChanged: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IHeaderProps> = (props) => {

    const sortByYearAscending = () => {
        if( props.movies ) props.setMovies(props.movies.sort((a: IMovie, b: IMovie) => Number(a.year) - Number(b.year)));
        props.setMoviesChanged(!props.moviesChanged);
    }

    const sortByYearDescending = () => {
        if( props.movies ) props.setMovies(props.movies.sort((a: IMovie, b: IMovie) => Number(b.year) - Number(a.year)));
        props.setMoviesChanged(!props.moviesChanged);
    }

    const sortByBestRate = () => {
        if( props.movies ) props.setMovies(props.movies.sort((a: IMovie, b: IMovie) => Number(b.rate) - Number(a.rate)));
        props.setMoviesChanged(!props.moviesChanged);
    }

    const sortAz = () => {
        if( props.movies ) props.setMovies(props.movies.sort((a: IMovie, b: IMovie) => a.title.localeCompare(b.title)));
        props.setMoviesChanged(!props.moviesChanged);
    }

    const sortZa = () => {
        if( props.movies ) props.setMovies(props.movies.sort((a: IMovie, b: IMovie) => b.title.localeCompare(a.title)));
        props.setMoviesChanged(!props.moviesChanged);
    }

    return (  
        <header>
            <button onClick={sortByYearAscending}>Sort by Date Ascending</button>
            <button onClick={sortByYearDescending}>Sort by Date Descending</button>
            <button onClick={sortByBestRate}>Best Rate</button>
            <button onClick={sortAz}>A-Z</button>
            <button onClick={sortZa}>Z-A</button>
        </header>
    );
}

export default Header;