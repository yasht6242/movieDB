import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, Calendar } from "lucide-react";
import { Movie } from "../types/movie";
import { useFavorites } from "../context/FavoritesContext";

interface MovieCardProps {
  movie: Movie;
  showType?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, showType = false }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isMovieFavorite = isFavorite(movie.id);
  console.log("MovieCard - Movie:", movie);
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMovieFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const getPosterUrl = (path: string) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  const getTitle = () => {
    return movie.title || movie.name || "Unknown Title";
  };

  const getReleaseDate = () => {
    return movie.release_date || movie.first_air_date || "";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <Link to={`/${movie.media_type || "movie"}/${movie.id}`}>
          <img
            src={getPosterUrl(movie?.poster_path)}
            alt={getTitle()}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
            isMovieFavorite
              ? "bg-red-500 text-white"
              : "bg-black bg-opacity-50 text-white hover:bg-red-500"
          }`}
        >
          <Heart
            className={`h-5 w-5 ${isMovieFavorite ? "fill-current" : ""}`}
          />
        </button>

        {showType && movie.media_type && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-slate-900 px-2 py-1 rounded-full text-xs font-medium">
            {movie.media_type === "movie" ? "Movie" : "TV Show"}
          </div>
        )}
      </div>

      <div className="p-4">
        <Link to={`/${movie.media_type || "movie"}/${movie.id}`}>
          <h3 className="font-bold text-lg mb-2 text-slate-900 hover:text-yellow-600 transition-colors line-clamp-1">
            {getTitle()}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-600">
              {getReleaseDate() ? getYear(getReleaseDate()) : "TBA"}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-slate-700">
              {movie?.vote_average?.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
