import { useLoaderData, useParams } from "react-router-dom";

const MovieDetiles = () => {
    const movies = useLoaderData();
    const { imdbmovieid } = useParams();
    const movie = movies.find(movie => movie.imdbmovieid === imdbmovieid)
    console.log(movie);
    return (
        <div className="max-w-screen-xl h-[91vh] text-center md:text-left mx-auto px-4 grid  grid-cols-1 md:grid-cols-7 gap-5 justify-center items-center">
            <img src={movie.moviemainphotos} alt="" className="col-span-1 md:col-span-3 lg:col-span-2 w-full rounded-lg shadow-md max-w-80 mx-auto mt-5" />
            <div className="col-span-1 md:col-span-4 lg:col-span-5">
                <h2 className="text-6xl font-medium">{movie.movietitle}</h2>
                <p className="text-lg mt-3">IMDB Movie ID: {movie.imdbmovieid}</p>
                <div className="mt-4">
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
                <div className="flex flex-col mt-6">
                    <p className="text-lg font-bold">Realised Countries :</p>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {movie && movie.moviecountries && movie.moviecountries.length > 0
                            ? movie.moviecountries.map((country, index) => (
                                <span key={index} className="mr-3">
                                    {country}
                                    {index !== movie.moviecountries.length - 1 && ','}
                                </span>
                            ))
                            : "No Info Found"}
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <p className="text-lg font-bold">Available Languages :</p>
                    <div className="mb-5 flex flex-wrap justify-center md:justify-start">
                        {movie && movie.movielanguages && movie.movielanguages.length > 0
                            ? movie.movielanguages.map((country, index) => (
                                <span key={index} className="mr-3">
                                    {country}
                                    {index !== movie.movielanguages.length - 1 && ','}
                                </span>
                            ))
                            : "No Info Found"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetiles;