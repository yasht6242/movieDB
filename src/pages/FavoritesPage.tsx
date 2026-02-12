import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieGrid from '../components/MovieGrid';
import { Heart } from 'lucide-react';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Heart className="h-8 w-8 text-red-500" />
          <h1 className="text-4xl font-bold text-slate-900">My Favorites</h1>
        </div>
        
        {favorites.length > 0 ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">
                Your Favorite Movies & Shows ({favorites.length})
              </h2>
              <p className="text-slate-600">Your personal collection of favorite content</p>
            </div>
            <MovieGrid movies={favorites} showType={true} />
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-700 mb-4">No favorites yet</h3>
            <p className="text-slate-600 mb-8">
              Start exploring movies and TV shows to add them to your favorites!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/movies" className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                Browse Movies
              </a>
              <a href="/tv-shows" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors">
                Browse TV Shows
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;