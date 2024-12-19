import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import IMovie from "../interfaces/IMovie";

interface IRootLayoutProps {
    movies: IMovie[] | null,
    setMovies: React.Dispatch<React.SetStateAction<IMovie[] | null>>
    moviesChanged: boolean,
    setMoviesChanged: React.Dispatch<React.SetStateAction<boolean>>
}

const RootLayout: React.FC<IRootLayoutProps> = (props) => {
    return (  
        <>
            <Header movies={props.movies} setMovies={props.setMovies} moviesChanged={props.moviesChanged} setMoviesChanged={props.setMoviesChanged} />
            <Outlet />
        </>
    );
}

export default RootLayout;