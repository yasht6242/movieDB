import { Movie, MovieDetails, SearchResult } from "../types/movie";

const API_KEY = "e70156b5cbbf45a0b205bb5d196c3d61";
const BASE_URL = "https://api.themoviedb.org/3";

class TMDBService {
  getImageUrl(path: string, size: string = "w500"): string {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  }
  async getSearchSuggestions(query: string): Promise<SearchResult> {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    return await response.json();
  }

  async getActors(id: number, media_type: string): Promise<string | null> {
    const endpoint =
      media_type === "tv" ? `tv/${id}/credits` : `movie/${id}/credits`;
    const response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast || [];
  }
  async getTrendingMovies(): Promise<Movie[]> {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data, "Trending Movies Data");
    return data.results;
  }

  async getTrendingTVShows(): Promise<Movie[]> {
    const response = await fetch(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data, "Trending TV Shows Data");
    return data.results;
  }

  async getTrendingAll(): Promise<Movie[]> {
    const response = await fetch(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  }

  async searchShows(query: string): Promise<SearchResult> {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    return await response.json();
  }

  async getMovieDetails(id: number): Promise<MovieDetails> {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return await response.json();
  }

  async getTVDetails(id: number): Promise<MovieDetails> {
    const response = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return await response.json();
  }

  async getMovieTrailer(id: number): Promise<string | null> {
    console.log("Fetching movie trailer for ID:", id);
    const response = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log("Trailer data:", data);
    const trailer = data.results.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube"
    );
    return trailer ? trailer.key : null;
  }

  async getTVTrailer(id: number): Promise<string | null> {
    const response = await fetch(
      `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube"
    );
    return trailer ? trailer.key : null;
  }
}

export const tmdbService = new TMDBService();
