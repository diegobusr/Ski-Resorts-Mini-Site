'use client';

import { useMemo, useState, useEffect } from 'react';
import { Resort } from '@/types/Resort';
import ResortCard from './ResortCard';

type Props = {
  resorts: Resort[];
};

const ResortsGrid = ({ resorts }: Props) => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('all');
  const [region, setRegion] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('resort-favorites');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFavorites(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      'resort-favorites',
      JSON.stringify(Array.from(favorites))
    );
  }, [favorites]);

  const toggleFavorite = (resortId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(resortId)) {
        next.delete(resortId);
      } else {
        next.add(resortId);
      }
      return next;
    });
  };

  const countries = useMemo(() => {
    const set = new Set<string>();
    resorts.forEach((r) => set.add(r.country || ''));
    return Array.from(set).filter(Boolean).sort();
  }, [resorts]);

  const regions = useMemo(() => {
    const set = new Set<string>();
    resorts
      .filter((r) => (country === 'all' ? true : r.country === country))
      .forEach((r) => {
        if (r.region) set.add(r.region);
      });
    return Array.from(set).filter(Boolean).sort();
  }, [resorts, country]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = resorts.filter((r) => {
      if (showFavoritesOnly && !favorites.has(r.id)) return false;
      if (country !== 'all' && r.country !== country) return false;
      if (region !== 'all' && r.region !== region) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        (r.shortDescription || '').toLowerCase().includes(q) ||
        (r.country || '').toLowerCase().includes(q) ||
        (r.region || '').toLowerCase().includes(q)
      );
    });

    switch (sortBy) {
      case 'name':
        list = list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        list = list.sort((a, b) => (a.ticketPrice ?? 0) - (b.ticketPrice ?? 0));
        break;
      case 'elevation':
        list = list.sort((a, b) => (b.elevation ?? 0) - (a.elevation ?? 0));
        break;
      case 'snowfall':
        list = list.sort((a, b) => (b.snowfall ?? 0) - (a.snowfall ?? 0));
        break;
      default:
        break;
    }

    return list;
  }, [resorts, query, country, region, sortBy, showFavoritesOnly, favorites]);

  return (
    <div>
      <div className='mb-6 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black bg-gray-50 p-4 rounded-md'>
        <div className='col-span-1'>
          <label className='block text-sm font-medium text-gray-700'>
            Search
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by name, country, region or description'
            className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Country
          </label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setRegion('all');
            }}
            className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm'
          >
            <option value='all'>All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Region
          </label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className='mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm'
            disabled={regions.length === 0}
          >
            <option value='all'>All regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Sort
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm'
          >
            <option value='name'>Name (A–Z)</option>
            <option value='price'>Ticket price (low → high)</option>
            <option value='elevation'>Elevation (high → low)</option>
            <option value='snowfall'>Snowfall (high → low)</option>
          </select>
        </div>

        <div className='mt-5'>
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`text-center px-4 py-2 text-sm font-medium border rounded-lg shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              showFavoritesOnly
                ? 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700'
                : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            {showFavoritesOnly ? '★ Favorites Only' : '☆ Show Favorites'}
          </button>
        </div>

        <div className='mt-5'>
          <button
            onClick={() => {
              setQuery('');
              setCountry('all');
              setRegion('all');
              setSortBy('name');
              setShowFavoritesOnly(false);
            }}
            className='text-center px-4 py-2 bg-white text-sm text-gray-900 font-medium border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className='mb-4 text-sm text-gray-600'>
        Showing {filtered.length} of {resorts.length} resorts
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filtered.map((r) => (
          <ResortCard
            key={r.id}
            resort={r}
            isFavorite={favorites.has(r.id)}
            onToggleFavorite={() => toggleFavorite(r.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResortsGrid;

