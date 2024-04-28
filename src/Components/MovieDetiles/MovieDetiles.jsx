import { useLoaderData, useParams } from "react-router-dom";

const MovieDetiles = () => {
    const movies = useLoaderData();
    const { imdbmovieid } = useParams();
    const movie = movies.find(movie => movie.imdbmovieid === imdbmovieid)
    console.log(movie);
    return (
        <div className="max-w-screen-xl h-[91vh] border mx-auto grid grid-cols-7 gap-5 justify-center items-center">
            <img src={movie.moviemainphotos} alt="" className="col-span-2 w-full rounded-lg shadow-md" />
            <div className="col-span-5 border">
                <h2 className="text-6xl font-medium">{movie.movietitle}</h2>
                <p className="text-lg">IMDB Movie ID: {movie.imdbmovieid}</p>
                <div className="mt-3">
                    {
                        movie && movie.moviegenres
                            ?
                            movie.moviegenres.map((genre, index) => (
                                <><span key={index} className="mr-3 p-2 border rounded-full">{genre}</span></>
                            ))
                            :
                            ""
                    }
                </div>
                <div className="mt-5 flex flex-wrap">
                    {movie && movie.moviecountries
                        ? movie.moviecountries.map((country, index) => (
                            <span key={index} className="mr-3">
                                {country}
                                {index !== movie.moviecountries.length - 1 && ','}
                            </span>
                        ))
                        : ""}
                </div>
                <div className="mt-2 flex flex-wrap">
                    {movie && movie.movielanguages
                        ? movie.movielanguages.map((country, index) => (
                            <span key={index} className="mr-3">
                                {country}
                                {index !== movie.movielanguages.length - 1 && ','}
                            </span>
                        ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default MovieDetiles;