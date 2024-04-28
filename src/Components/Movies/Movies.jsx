import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Button } from "@material-tailwind/react";
import geners from "../../../public/Geners.json";
import { Input } from "@material-tailwind/react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesLength, setMoviesLength] = useState(30);
    const [genreFilter, setGenreFilter] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('AllMovies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    // Function for filtering movies based on search and geners
    const applyFilters = (movie) => {
        const titleMatchesSearch = search === '' || movie.movietitle.toLowerCase().includes(search.toLowerCase());
        const genreMatchesFilter = !genreFilter || movie.moviegenres.includes(genreFilter);
        return titleMatchesSearch && genreMatchesFilter;
    };

    // Function to update genre filter
    const handleGenreFilterChange = (genre) => {
        setGenreFilter(genre);
    };

    return (
        <div className="px-2 mx-auto">
            {/* Genre filter buttons */}
            <div className="flex flex-wrap max-w-screen-xl mx-auto justify-center gap-2 my-4">
                {geners.map((genre, index) => (
                    <Button
                        key={index}
                        onClick={() => handleGenreFilterChange(genre)}
                        color={genre === genreFilter ? "red" : "gray"}
                        ripple={true}
                        variant="outline">
                        {genre}
                    </Button>
                ))}
            </div>
            {/* Search input field */}
            <div className="flex justify-center mb-4">
                <div className="w-72">
                    <Input onChange={(e) => setSearch(e.target.value)} color="white" label="Search Movie" />
                </div>
            </div>
            {/* Display filtered movies */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-auto max-w-screen-2xl">
                {movies
                    .filter(applyFilters)
                    .slice(0, moviesLength)
                    .map((movie) => (
                        <MovieCard key={movie.imdbmovieid} movie={movie}></MovieCard>
                    ))}
            </div>
            {/* Button to see all movies */}
            <div className={moviesLength === movies.length || movies.filter(applyFilters).length <= 30 ? 'hidden' : 'flex justify-center'}>
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