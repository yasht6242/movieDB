import React, { useState, useEffect } from "react";
import { tmdbService } from "../services/tmdb";
import { Movie } from "../types/movie";
import MovieGrid from "../components/MovieGrid";
import { Monitor } from "lucide-react";

const WebSeriesPage: React.FC = () => {
  const [webSeries, setWebSeries] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebSeries = async () => {
      try {
        // For now, using TV shows as web series
        const trendingWebSeries = await tmdbService.getTrendingTVShows();
        setWebSeries(trendingWebSeries);
      } catch (error) {
        console.error("Error fetching web series:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebSeries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Monitor className="h-8 w-8 text-yellow-400" />
          <h1 className="text-4xl font-bold text-slate-900">Web Series</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">
            Trending Web Series
          </h2>
          <p className="text-slate-600">
            Discover the most popular web series and digital content
          </p>
        </div>

        <MovieGrid movies={webSeries} loading={loading} />
      </div>
    </div>
  );
};

export default WebSeriesPage;
