import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Button } from "@material-tailwind/react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesLength, setMoviesLength] = useState(30);

    useEffect(() => {
        fetch('AllMovies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div className="px-2 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  mx-auto max-w-screen-2xl">
                {
                    movies.slice(0, moviesLength).map(movie => <MovieCard key={movie.imdbmovieid} movie={movie}></MovieCard>)
                }
            </div>
            <div className={moviesLength === movies.length ? 'hidden' : 'flex justify-center'}>
                <Button
                    onClick={() => setMoviesLength(movies.length)}
                    ripple={true}
                    color="red"
                    variant="gradient">
                    SEE All
                </Button>
            </div>
        </div>
    );
};

export default Movies;