import { useNavigate } from 'react-router-dom';

const Books = ({ books, query = '' }) => {
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredBooks.map((book) => (
        <div
          key={book._id}
          className="bg-white p-4 shadow rounded cursor-pointer"
          onClick={() => navigate(`/books/${book._id}`)}
        >
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="text-lg font-bold">{book.name}</h2>
          <p className="text-gray-600">{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
