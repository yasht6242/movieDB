import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { tmdbService } from "../services/tmdb";
import { MovieDetails } from "../types/movie";
import { useFavorites } from "../context/FavoritesContext";
import { Heart, Star, Calendar, Clock, ArrowLeft, Play } from "lucide-react";

const MovieDetailPage: React.FC = () => {
  const { media_type, id } = useParams();
  console.log("Media Type:", media_type, "ID:", id);
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [trailer, setTraier] = useState<string | null>(null);
  const [actors, setActors] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;

      try {
        if (media_type === "tv") {
          const tvDetails = await tmdbService.getTVDetails(parseInt(id));
          const tvTrailer = await tmdbService.getTVTrailer(parseInt(id));
          setTraier(tvTrailer);
          setMovie(tvDetails);
        } else {
          const movieDetails = await tmdbService.getMovieDetails(parseInt(id));
          setMovie(movieDetails);
          const movieTrailer = await tmdbService.getMovieTrailer(parseInt(id));
          setTraier(movieTrailer);
        }

        const actors = await tmdbService.getActors(
          parseInt(id),
          media_type || "movie"
        );
        setActors(actors);
        console.log("Actors:", actors);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleFavoriteClick = () => {
    if (!movie) return;

    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const getBackdropUrl = (path: string) => {
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };

  const getPosterUrl = (path: string) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const getTitle = () => {
    return movie?.title || movie?.name || "Unknown Title";
  };

  const getReleaseDate = () => {
    return movie?.release_date || movie?.first_air_date || "";
  };

  const getYear = () => {
    const date = getReleaseDate();
    return date ? new Date(date).getFullYear() : "";
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading movie details...</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">
            Movie not found
          </h2>
          <Link to="/" className="text-yellow-600 hover:text-yellow-700">
            Go back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back </span>
            </button>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Poster */}
            <div className="md:w-1/3">
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={getTitle()}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">
                    {getTitle()}
                  </h1>
                  {movie.tagline && (
                    <p className="text-lg text-slate-600 italic">
                      {movie.tagline}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleFavoriteClick}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isFavorite(movie.id)
                      ? "bg-red-500 text-white"
                      : "bg-slate-200 text-slate-600 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isFavorite(movie.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Rating and Info */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-bold text-slate-700">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-slate-500">
                    ({movie.vote_count} votes)
                  </span>
                </div>
                {getReleaseDate() && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-5 w-5 text-slate-500" />
                    <span className="text-slate-700">{getYear()}</span>
                  </div>
                )}
                {movie.runtime && (
                  <div className="flex items-center space-x-1">
                    <Clock className="h-5 w-5 text-slate-500" />
                    <span className="text-slate-700">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </div>
                )}
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Overview
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* actors */}
      {actors && actors.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Meet the Cast
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {actors.slice(0, 15).map((actor, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={getPosterUrl(actor.profile_path)}
                  alt={actor.name}
                  className="w-32 h-32 rounded-full shadow-md object-cover"
                />
                <h3 className="mt-2 text-md font-semibold text-slate-800 text-center">
                  {actor.name}
                </h3>
                <p className="text-sm text-slate-500 text-center">
                  as {actor.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trailer Section */}
      {trailer && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Watch the Official Trailer
          </h2>
          <div className="max-w-2xl mx-auto aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${trailer}`}
              title="Movie Trailer"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
