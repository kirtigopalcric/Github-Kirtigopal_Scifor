import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/footer";
import Home from "./Component/Home/home";
import DefaultCategory from "./Component/Categories/defaultCategory";
import Categories from "./Component/Categories/categories";
import Cart from "./Component/Cart/cart";
import Profile from "./Component/Profile/profile";
import bookAPI from "./Component/BooksData/bookdata";
import BookDetails from "./Component/Bookdetails/bookDetails.jsx";
import CartProvider from "./Component/CartContext/CartContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const books = Object.values(bookAPI.books).flat();

  

  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <Router>
      <div className="container mx-auto flex flex-col min-h-screen">
  <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
  <div className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<DefaultCategory />} />
      <Route path="/categories/:categoryName" element={<Categories />} />
      <Route path="/cart" element={<Cart books={books} />} />
      <Route path="/profile" element={<Profile isAdmin={isAdmin} />} />
      <Route path="/books/:category/:bookId" element={<BookDetails />} />
        <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  </div>
</div>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

