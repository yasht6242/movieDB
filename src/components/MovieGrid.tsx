import React from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
  movies: Movie[];
  loading?: boolean;
  showType?: boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, loading = false, showType = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="bg-slate-200 rounded-lg h-96 animate-pulse">
            <div className="h-80 bg-slate-300 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-slate-300 rounded mb-2"></div>
              <div className="h-3 bg-slate-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-slate-700 mb-4">No movies found</h3>
        <p className="text-slate-600">Try adjusting your search criteria or browse our trending content.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} showType={showType} />
      ))}
    </div>
  );
};

export default MovieGrid;