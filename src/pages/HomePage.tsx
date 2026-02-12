import React, { useState, useEffect } from "react";
import { tmdbService } from "../services/tmdb";
import { Movie } from "../types/movie";
import HeroSection from "../components/HeroSection";
import MovieGrid from "../components/MovieGrid";
import { TrendingUp, Film, Tv } from "lucide-react";

const HomePage: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [trendingTVShows, setTrendingTVShows] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingContent = async () => {
      try {
        const [movies, tvShows] = await Promise.all([
          tmdbService.getTrendingMovies(),
          tmdbService.getTrendingTVShows(),
        ]);
        console.log("Trending Movies:", movies);
        console.log("Trending TV Shows:", tvShows);
        setTrendingMovies(movies);
        setTrendingTVShows(tvShows);

        // Set featured movie from trending movies
        if (movies.length > 0) {
          setFeaturedMovie(movies[0]);
        }
      } catch (error) {
        console.error("Error fetching trending content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingContent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      {featuredMovie && <HeroSection movie={featuredMovie} />}

      {/* Trending Movies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-yellow-400" />
            <Film className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-slate-900">
              Trending Movies
            </h2>
          </div>
          <MovieGrid movies={trendingMovies.slice(0, 20)} loading={loading} />
        </div>

        {/* Trending TV Shows Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-yellow-400" />
            <Tv className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-slate-900">
              Trending TV Shows
            </h2>
          </div>
          <MovieGrid movies={trendingTVShows.slice(0, 20)} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
