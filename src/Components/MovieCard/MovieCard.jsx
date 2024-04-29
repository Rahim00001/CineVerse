/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { movietitle, moviemainphotos, imdbmovieid } = movie;
    return (
        <Link to={`/movie/${imdbmovieid}`}>
            <div className="group hover:scale-105 transition-transform duration-300 mb-4 flex flex-col justify-center items-center">
                <img src={moviemainphotos} alt="movieImg" className="rounded-md" />
                <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">{movietitle}</h2>
            </div>
        </Link>
    );
};

export default MovieCard;