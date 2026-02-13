import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film, Tv, Monitor, Heart, Search, Menu, X } from "lucide-react";
import { tmdbService } from "../services/tmdb";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    if (searchQuery.length > 1) {
      const timeout = setTimeout(async () => {
        const suggestions = await tmdbService.getSearchSuggestions(searchQuery);
        setSuggestions(suggestions.results || []);
      }, 300);
      setDebounceTimeout(timeout);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (item: any) => {
    const type = item.media_type === "tv" ? "tv" : "movie";
    navigate(`/${type}/${item.id}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <img src="/src/images/put.png" alt="MovieDB Logo" className="h-15 w-60" /> */}
            <span className="text-2xl font-bold">MovieDB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* existing links... */}
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link
              to="/movies"
              className="hover:text-yellow-400 flex items-center space-x-1"
            >
              <Film className="h-4 w-4" />
              <span>Movies</span>
            </Link>
            <Link
              to="/tv-shows"
              className="hover:text-yellow-400 flex items-center space-x-1"
            >
              <Tv className="h-4 w-4" />
              <span>TV Shows</span>
            </Link>
            <Link
              to="/web-series"
              className="hover:text-yellow-400 flex items-center space-x-1"
            >
              <Monitor className="h-4 w-4" />
              <span>Web Series</span>
            </Link>
            <Link
              to="/favorites"
              className="hover:text-yellow-400 flex items-center space-x-1"
            >
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Link>
          </nav>

          {/* Hamburger - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden ml-4 text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* search box */}
        <form
          onSubmit={handleSearch}
          className="relative mt-5 w-full flex justify-end"
        >
          <div className="relative">
            <input
              id="search-input"
              name="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies, TV shows..."
              className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400
             w-full sm:w-80 md:w-96 lg:w-[400px]"
            />

            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute z-50 mt-1 w-64 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden max-h-60 overflow-y-auto">
              {suggestions.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-4 py-2 cursor-pointer hover:bg-yellow-400 hover:text-black text-sm"
                >
                  {item.title || item.name}
                  <span className="ml-1 text-xs text-slate-400">
                    ({item.media_type})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex">
          <div className="bg-slate-900 w-64 p-6 space-y-6 h-full">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-white">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Home
              </Link>
              <Link
                to="/movies"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Movies
              </Link>
              <Link
                to="/tv-shows"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                TV Shows
              </Link>
              <Link
                to="/web-series"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Web Series
              </Link>
              <Link
                to="/favorites"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Favorites
              </Link>
            </nav>
          </div>
          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
