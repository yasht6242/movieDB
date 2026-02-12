import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVShowsPage from "./pages/TVShowsPage";
import WebSeriesPage from "./pages/WebSeriesPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/tv-shows" element={<TVShowsPage />} />
              <Route path="/web-series" element={<WebSeriesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/:media_type/:id" element={<MovieDetailPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
