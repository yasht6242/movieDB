import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  const getBackdropUrl = (path: string) => {
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };

  const getTitle = () => {
    return movie.title || movie.name || 'Unknown Title';
  };

  const getYear = () => {
    const date = movie.release_date || movie.first_air_date;
    return date ? new Date(date).getFullYear() : '';
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {getTitle()}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-white font-medium">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              {getYear() && (
                <span className="text-white font-medium">{getYear()}</span>
              )}
              <span className="text-white font-medium">
                {movie.media_type === 'movie' ? 'Movie' : 'TV Show'}
              </span>
            </div>

            <p className="text-lg text-gray-200 mb-8 line-clamp-3">
              {movie.overview}
            </p>

            <div className="flex space-x-4">
              <Link
                to={`/movie/${movie.id}`}
                className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Now</span>
              </Link>
              <Link
                to={`/movie/${movie.id}`}
                className="bg-slate-800 bg-opacity-70 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center space-x-2"
              >
                <Info className="h-5 w-5" />
                <span>More Info</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;