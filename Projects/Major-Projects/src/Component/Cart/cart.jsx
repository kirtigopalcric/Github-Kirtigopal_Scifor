import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, setCartItems, addOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveFromCart = (bookId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== bookId));
  };

  const handleCheckout = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      toast.error("Please log in to proceed to checkout.", { position: "top-center" });
      return;
    }

    if (cartItems.length === 0) {
      toast.warn("Your cart is empty.", { position: "top-center" });
      return;
    }

    addOrder(currentUser.username, cartItems);

    setCartItems([]);
    localStorage.removeItem("cartItems");
    toast.success("Thank you for your order!", { position: "top-center" });
    navigate("/profile");
  };

  const handleQuantityChange = (bookId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === bookId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0);
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-8 text-center text-gray-300">Your cart is empty.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex flex-col md:flex-row items-center border-b py-4">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-32 md:w-24 md:h-auto mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-xl font-medium text-gray-300">{item.title}</h2>
              <p className="text-gray-300 text-sm md:text-base">Author: {item.author}</p>
              <p className="font-bold text-slate-200">Price: ₹{item.price}</p>
              <div className="flex flex-col md:flex-row items-center mt-2">
                <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-300">
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  className="border rounded w-16 px-2 py-1 text-center mb-2 md:mb-0"
                  min="1"
                />
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg md:text-xl font-bold text-white">Total Items: {calculateTotalItems()}</div>
      <div className="mt-2 text-lg md:text-xl font-bold text-white">Total Price: ₹{calculateTotal()}</div>
      <div className="mt-4">
        <button
          onClick={handleCheckout}
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
