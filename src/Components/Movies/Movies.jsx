import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Button } from "@material-tailwind/react";
import geners from "../../../public/Geners.json";
import countries from "../../../public/Countries.json";
import languages from "../../../public/Languages.json";
import { Input, Select, Option } from "@material-tailwind/react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesLength, setMoviesLength] = useState(30);
    const [genreFilter, setGenreFilter] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('AllMovies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    // Function for filtering movies based on search, genres, language, and country
    const applyFilters = (movie) => {
        const titleMatchesSearch = search === '' || movie.movietitle.toLowerCase().includes(search.toLowerCase());
        const genreMatchesFilter = !genreFilter || movie.moviegenres.includes(genreFilter);
        const languageMatchesFilter = !selectedLanguage || selectedLanguage === "" || movie.movielanguages.includes(selectedLanguage);
        const countryMatchesFilter = !selectedCountry || selectedCountry === "" || movie.moviecountries.includes(selectedCountry);
        return titleMatchesSearch && genreMatchesFilter && languageMatchesFilter && countryMatchesFilter;
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
                        ripple={true}>
                        {genre}
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 max-w-screen-2xl mx-auto">
                {/* Country select field */}
                <Select
                    size="md"
                    color="blue-gray"
                    label="Select Country"
                    value={selectedCountry}
                    onChange={(e) => {
                        console.log(e); // Output the event object to the console
                        setSelectedCountry(e);
                    }}
                >
                    <Option value="">All</Option>
                    {countries.map(({ name }) => (
                        <Option key={name} value={name}>{name}</Option>
                    ))}
                </Select>

                {/* Language select field */}
                <Select
                    size="md"
                    color="blue-gray"
                    label="Select Language"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e)}
                >
                    <Option value="">All</Option>
                    {languages.map(({ language }) => (
                        <Option key={language} value={language}>{language}</Option>
                    ))}
                </Select>

                {/* Search input field */}
                <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
                    <Input onChange={(e) => setSearch(e.target.value)} color="blue-gray" label="Search Movie" />
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
