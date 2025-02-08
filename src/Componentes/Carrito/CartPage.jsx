import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems = [], removeFromCart, updateQuantity }) => {  
  const totalPrice = cartItems.length > 0 
    ? cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
    : 0;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price} c/u</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.stock)}
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-400"
                    disabled={item.quantity <= 1}
                  >-</button>

                  <span className="px-4 py-2 border">{item.quantity || 1}</span>

                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.stock)}
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-400"
                    disabled={item.quantity >= item.stock}
                  >+</button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-700 transition">
              Proceder al pago
            </button>
          </div>
        </>
      )}

      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">← Seguir comprando</Link>
      </div>
    </div>
  );
};
export default CartPage;
