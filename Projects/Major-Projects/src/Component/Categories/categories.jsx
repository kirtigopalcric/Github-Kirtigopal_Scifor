import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import bookAPI from "../BooksData/bookdata";
import { CartContext } from "../CartContext/CartContext";
import { toast } from "react-toastify";

const Categories = () => {
  const { categoryName } = useParams();
  const { cartItems, setCartItems, isLoggedIn } = useContext(CartContext);

  const booksInCategory = bookAPI.books[categoryName] || [];

  const handleAddToCart = (book) => {
    if (!isLoggedIn) {
      toast.error("Please log in to add items to your cart.", { position: "top-center" });
      return;
    }

    const existingItem = cartItems.find((item) => item.id === book.id);

    if (existingItem) {
      // If the item is already in the cart, show a toast message
      toast.info("This item is already in your cart!", { position: "top-center" });
    } else {
      // If the item is not in the cart, add it and show a success message
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...book, quantity: 1 }
      ]);
      toast.success(`${book.title} added to cart!`, { position: "top-center" });
    }
  };

  return (
    <div className="category min-h-screen bg-gray-800 text-white p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Books in {categoryName}</h1>
      {booksInCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {booksInCategory.map((book) => (
            <div
              key={book.id}
              className="bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-40 md:h-60 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-lg md:text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-400 text-sm md:text-base">Author: {book.author}</p>
              <p className="text-gray-300 text-xs md:text-sm mt-2">{book.description}</p>
              <p className="text-yellow-500 font-bold mt-4">Price: ₹{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)}
                className="w-full text-slate-800 bg-yellow-400 font-bold mt-4 rounded-md py-2 px-4 hover:bg-yellow-300"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg">No books available in this category.</p>
      )}
    </div>
  );
};

export default Categories;
