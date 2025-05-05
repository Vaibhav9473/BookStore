import { useLocation } from 'react-router-dom';
import Books from '../components/Books';
import { useEffect, useState } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get('q') || '';
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Example: fetch all books from your backend
    fetch('http://localhost:5000/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  return (
    <div className="mt-20 px-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <Books books={books} query={query} />
    </div>
  );
};

export default SearchResults;
