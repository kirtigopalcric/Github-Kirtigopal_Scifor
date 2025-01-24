import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import book from "../../assets/book.png";
import { CartContext } from "../CartContext/CartContext";
import LoginModal from "../LogInModal/LogInModal";
import bookAPI from "../BooksData/bookdata";
import prof1 from '../../assets/prof1.jpg';
import prof2 from '../../assets/prof2.jpg';
import prof3 from '../../assets/prof3.jpg';
import prof4 from '../../assets/prof4.jpg';
import adminprofile from '../../assets/admin.jpg'


function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginError, setLoginError] = useState(""); // For login feedback
  const { isLoggedIn, setIsLoggedIn, isAdmin, cartItems, setIsAdmin, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const Links = [
    { title: "Home", link: "/" },
    { title: "Categories", link: "/categories" },
    { title: isAdmin ? "Admin Panel" : "Profile", link: "/profile" },
  ];

  const categories = [
    { name: "Fiction", link: "/categories/fiction" },
    { name: "Non-Fiction", link: "/categories/nonfiction" },
    { name: "Science", link: "/categories/science" },
    { name: "Self-Learn", link: "/categories/selfhelp" },
    { name: "Psychology", link: "/categories/psychology" },
  ];

  const users = {
    admin: { password: "admin123", image: adminprofile },
    user1: { password: "user123", image: prof1 },
    user2: { password: "user234", image: prof2 },
    user3: { password: "user345", image: prof3 },
    user4: { password: "user456", image: prof4 },
  };

  // Current user state
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    return savedUser || null;
  });

  const handleLogin = (role, username, password) => {
    if (users[username] && users[username].password === password) {
      const userImage = users[username].image;
      const loggedInUser = { username, role, image: userImage };

      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      setIsLoggedIn(true);
      setIsAdmin(username === "admin"); // Only admin gets admin access
      setCurrentUser(loggedInUser);
      setIsModalOpen(false); // Close the login modal
      setLoginError(""); // Clear any previous login errors
      navigate("/");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCartItems([]);
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  // Calculate total items in cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  const allBooks = Object.values(bookAPI.books).flat();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = allBooks.filter((book) => {
      const title = book?.title?.toLowerCase() ?? "";
      const author = book?.author?.toLowerCase() ?? "";
      return title.includes(query.toLowerCase()) || author.includes(query.toLowerCase());
    });
    setSearchResults(results);
  };

  const handleSearchResultClick = (book) => {
    const category = book.category || "uncategorized"; // Provide a default category
    navigate(`/books/${category}/${book.id}`);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleMouseEnterCategories = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveCategories = () => {
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-cyan-500 px-8 py-4 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img className="h-12 me-4" src={book} alt="store logo" />
        <h1 className="text-2xl md:text-4xl text-white font-semibold">Book-Store</h1>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search books..."
          className="text-black rounded-md px-3 py-1 w-3/4 pr-10 "
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchResults.length > 0 && (
          <div className="absolute top-12 left-0 bg-white text-black p-4 rounded shadow-lg w-full z-10 max-h-48 overflow-y-auto">
          {searchResults.map((book, index) => {
            const category = book.category || "uncategorized"; // Default category here too
            return (
              <Link
                key={`${book.id}-${index}`}
                to={`/books/${category}/${book.id}`}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSearchResultClick(book)}
              >
                <div className="font-bold">{book.title}</div>
                <div>ImageURL: {book.imageURL}</div>
                <div>Author: {book.author}</div>
                <div>Price: ₹{book.price}</div>
                <div>Description: {book.description}</div>
                <div>{book.description?.substring(0, 50) || "No description provided"}...</div> {/* optional chaining and default message */}
              </Link>
            );
          })}
        </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center mt-4 md:mt-0 space-x-4 text-xl">
        {Links.map((item, i) => (
          <div
            key={i}
            className="relative hover:text-purple-600"
            onMouseEnter={item.title === "Categories" ? handleMouseEnterCategories : undefined}
            onMouseLeave={item.title === "Categories" ? handleMouseLeaveCategories : undefined}
          >
            <Link to={item.link}>{item.title}</Link>
            {item.title === "Categories" && showDropdown && (
              <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg p-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.link}
                    className="block px-4 py-2 hover:text-purple-600"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

       {/* User Profile / Login/Logout Section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
          <Link
            to="/cart"
            className="flex items-center hover:text-purple-600"
          >
            Cart
            {totalCartItems > 0 && (
              <span className="ml-2 bg-yellow-500 text-black font-bold rounded-full px-2 py-1 text-xs">
                {totalCartItems}
              </span>
            )}
          </Link>

            {/* Show Profile Image */}
            {currentUser && currentUser.image && (
              <Link to="/profile">
                <img
                  src={currentUser.image}
                  alt={`${currentUser.username} profile`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-500 hover:bg-slate-600 hover:border-blue-50 text-2xl text-white p-2 rounded"
          >
            Log In
          </button>
        )}
      </div>

      

          {/* Login Modal */}
         {isModalOpen && (
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLogin={handleLogin}
          loginError={loginError}
        />
      )}
        </div>
      </div>
  );
}

export default Navbar;


