import React, { useState, useEffect } from 'react';
import { tmdbService } from '../services/tmdb';
import { Movie } from '../types/movie';
import MovieGrid from '../components/MovieGrid';
import { Film } from 'lucide-react';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await tmdbService.getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Film className="h-8 w-8 text-yellow-400" />
          <h1 className="text-4xl font-bold text-slate-900">Movies</h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Trending Movies</h2>
          <p className="text-slate-600">Discover the most popular movies trending this week</p>
        </div>

        <MovieGrid movies={movies} loading={loading} />
      </div>
    </div>
  );
};

export default MoviesPage;