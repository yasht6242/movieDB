import React, { useState, useEffect } from 'react';
import { tmdbService } from '../services/tmdb';
import { Movie } from '../types/movie';
import MovieGrid from '../components/MovieGrid';
import { Tv } from 'lucide-react';

const TVShowsPage: React.FC = () => {
  const [tvShows, setTvShows] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const trendingTVShows = await tmdbService.getTrendingTVShows();
        setTvShows(trendingTVShows);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Tv className="h-8 w-8 text-yellow-400" />
          <h1 className="text-4xl font-bold text-slate-900">TV Shows</h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Trending TV Shows</h2>
          <p className="text-slate-600">Discover the most popular TV shows trending this week</p>
        </div>

        <MovieGrid movies={tvShows} loading={loading} />
      </div>
    </div>
  );
};

export default TVShowsPage;