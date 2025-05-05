import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-5 mt-20 min-h-screen dark:text-white">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded shadow-sm dark:border-slate-700"
            >
              <img src={item.image} alt={item.name} className="h-20 w-20 object-contain" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
              <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          {/* टोटल प्राइस */}
          <div className="mt-6 text-xl font-bold">
            Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;