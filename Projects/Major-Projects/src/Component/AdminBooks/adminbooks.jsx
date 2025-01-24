import React, { useState } from "react";

const AdminBooks = ({ onClose }) => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    imageUrl: "",
    description: "",
    category: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleAddBook = () => {
    const newBook = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID
      ...bookDetails,
      price: parseFloat(bookDetails.price), // Ensure price is a number
    };

    console.log("Book added:", newBook);
    // Add logic to save the book to an API or state here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-300 p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold bg-slate-700 rounded-lg mb-4">Add New Book</h2>

        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={bookDetails.title}
            onChange={handleInputChange}
            className="w-full border p-2 text-black rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={bookDetails.author}
            onChange={handleInputChange}
            className="w-full border p-2 text-black rounded"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={bookDetails.imageUrl}
            onChange={handleInputChange}
            className="w-full border p-2 text-black rounded"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description"
            value={bookDetails.description}
            onChange={handleInputChange}
            className="w-full border p-2 rounded h-24 text-black resize-none"
          />
        </div>

        <div className="mb-4">
          <select
            name="category"
            value={bookDetails.category}
            onChange={handleInputChange}
            className="w-full border p-2 text-black rounded"
          >
            <option value="">Select Category</option>
            <option value="psychology">Psychology</option>
            <option value="fiction">Fiction</option>
            <option value="self-help">Self-Help</option>
            <option value="biography">Biography</option>
            <option value="science">Science</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={bookDetails.price}
            onChange={handleInputChange}
            className="w-full border p-2 text-black rounded"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleAddBook}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Book
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBooks;
