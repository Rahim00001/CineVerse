/* eslint-disable react/prop-types */

const MovieCard = ({ movie }) => {
    const { movietitle, moviemainphotos } = movie;
    return (
        <div className="mb-4">
            <img src={moviemainphotos} alt="movieImg" />
            <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">{movietitle}</h2>
        </div>
    );
};

export default MovieCard;