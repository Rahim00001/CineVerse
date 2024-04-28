import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('AllMovies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-6 mx-auto max-w-screen-2xl">
                {
                    movies.map(movie => <MovieCard key={movie.title} movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Movies;