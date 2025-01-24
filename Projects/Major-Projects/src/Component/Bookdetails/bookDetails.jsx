import React, { useState, useEffect,useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useParams } from "react-router-dom";
import bookAPI from "../BooksData/bookdata"; // Use the imported bookAPI
import { PropagateLoader } from "react-spinners";

const BookDetails = () => {
  const { category, bookId } = useParams(); // Extract params from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const { cartItems, setCartItems, isLoggedIn } = useContext(CartContext);

  useEffect(() => {
    // Simulate data loading with a timeout
    setTimeout(() => {
      if (category && bookAPI.books[category]) {
        const foundBook = bookAPI.books[category]?.find(
          (book) => book.id === parseInt(bookId, 10)
        );
        setBook(foundBook);
      }
      setLoading(false);
    }, 1000); // Simulate 1-second loading time
  }, [category, bookId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PropagateLoader color="#3498db" />
      </div>
    );
  }

  if (!category || !bookAPI.books[category]) {
    return <p className="text-center text-red-500">Category not found</p>;
  }

  if (!book) {
    return <p className="text-center text-red-500">Book not found</p>;
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
        alert("Please log in to add items to the cart.");
        return;
    }

    // Add the book to the cart
    setCartItems([...cartItems, book]);
    alert(`${book.title} has been added to the cart!`);
};

  return (
    <div className="p-4 flex flex-col md:flex-row text-violet-600 items-center  justify-center">
      <img
        src={book.imageUrl} // Ensure the key name matches your data structure
        alt={book.title}
        className="w-full m-4 md:w-64  h-auto md:mr-4 mb-4 md:mb-0"
      />
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="mb-1 text-2xl">Author: {book.author}</p>
        <p className="mb-1 text-4xl">Price: ₹{book.price}</p>
        <p className="mb-1 text-purple-500">Description: {book.description}</p>
        <button className="w-full text-slate-800 bg-yellow-400 font-bold mt-4 rounded-md py-2 px-4 hover:bg-yellow-600" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;



