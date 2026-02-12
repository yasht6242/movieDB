import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { tmdbService } from "../services/tmdb";
import { Movie } from "../types/movie";
import MovieGrid from "../components/MovieGrid";
import { Search } from "lucide-react";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const query = searchParams.get("q") || "";

  useEffect(() => {
    const searchMovies = async () => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      try {
        const results = await tmdbService.searchShows(query);

        // Flatten and filter results
        const filtered = results.results.flatMap((item: any) => {
          if (item.media_type === "movie" || item.media_type === "tv") {
            return [item];
          } else if (item.media_type === "person" && item.known_for?.length) {
            return item.known_for.filter(
              (kf: any) =>
                (kf.media_type === "movie" || kf.media_type === "tv") &&
                kf.poster_path // must have image
            );
          }
          return [];
        });

        // Normalize data
        const normalized: Movie[] = filtered.map((item: any) => ({
          id: item.id,
          title: item.title || item.name || "Unknown Title",
          media_type: item.media_type,
          poster_path: item.poster_path,
          overview: item.overview || "",
          release_date: item.release_date || item.first_air_date || "",
          vote_average: item.vote_average || 0,
          backdrop_path: item.backdrop_path || "",
          vote_count: item.vote_count || 0,
          genre_ids: item.genre_ids || [],
          adult: item.adult || false,
          original_language: item.original_language || "",
          original_title: item.original_title || "",
          popularity: item.popularity || 0,
          video: item.video || false,
        }));

        setSearchResults(normalized);
        setTotalResults(normalized.length);
      } catch (error) {
        console.error("Error searching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Search className="h-8 w-8 text-yellow-400" />
          <h1 className="text-4xl font-bold text-slate-900">Search Results</h1>
        </div>

        {query && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-700 mb-2">
              Results for "{query}"
            </h2>
            <p className="text-slate-600">
              {loading ? "Searching..." : `Found ${totalResults} results`}
            </p>
          </div>
        )}

        {!query ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-700 mb-4">
              Search for movies and TV shows
            </h3>
            <p className="text-slate-600">
              Use the search bar above to find your favorite content
            </p>
          </div>
        ) : (
          <MovieGrid movies={searchResults} loading={loading} showType={true} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
