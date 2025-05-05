import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cards({ item }) {
  const [authUser] = useContext(AuthContext);
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart(); // 👈 Cart context hook

  const isInCart = cartItems.some(cartItem => cartItem.id === item.id); // Check if already in cart

  const handleDownload = () => {
    if (!authUser) {
      alert("Please log in to view/download this book.");
      navigate('/');
      return;
    }

    if (item.pdf) {
      window.open(item.pdf, '_blank', 'noopener,noreferrer');
    } else {
      alert("PDF not available!");
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(item.id);
      alert("Book removed from cart.");
    } else {
      addToCart(item);
      alert("Book added to cart!");
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-80 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
          <img
            src={item.image}
            alt="Tech Book"
            className="object-contain h-full"
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">
            Book {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline dark:bg-slate-900 dark:text-white">${item.price}</div>
            <div
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200"
              onClick={handleDownload}
            >
              View / Download
            </div>
            <button
              className={`px-3 py-1 rounded text-white ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
              onClick={handleAddToCart}
            >
              {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
