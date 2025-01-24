import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import prof1 from "../../assets/prof1.jpg";
import prof2 from "../../assets/prof2.jpg";
import prof3 from "../../assets/prof3.jpg";
import prof4 from "../../assets/prof4.jpg";
import adminprofile from "../../assets/admin.jpg";
import AdminBooks from "../AdminBooks/adminbooks"; // Import AdminBooks component

const Profile = () => {
  const { isLoggedIn, isAdmin } = useContext(CartContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const currentUserProfile = JSON.parse(localStorage.getItem("currentUserProfile")) || {};
  const userOrders = JSON.parse(localStorage.getItem("userOrders")) || {};
  const userOrder = currentUser ? userOrders[currentUser.username] || [] : [];
  const [showAdminBooksModal, setShowAdminBooksModal] = useState(false);

  // Determine profile image
  let profileImage;
  if (isAdmin) {
    profileImage = adminprofile;
  } else if (currentUserProfile && currentUserProfile.image) {
    profileImage = currentUserProfile.image;
  } else {
    const randomImageIndex = Math.floor(Math.random() * 4);
    switch (randomImageIndex) {
      case 0:
        profileImage = prof1;
        break;
      case 1:
        profileImage = prof2;
        break;
      case 2:
        profileImage = prof3;
        break;
      default:
        profileImage = prof4;
    }
  }

  if (!isLoggedIn) {
    return <div className="p-8 text-center text-gray-300">Please log in to view your profile.</div>;
  }

  return (
    <div className="p-8 text-gray-300 text-center">
      <h1 className="text-5xl font-bold mb-4 text-purple-500 hover:text-purple-600">Profile</h1>
      {currentUser && (
        <div>
          {/* User Profile Image */}
          <img
            src={profileImage}
            alt="User Profile"
            className="w-40 h-40 rounded-full border-4 border-purple-500 mx-auto mb-4 mt-4 object-cover"
          />
          <p>
            <strong className="text-3xl text-purple-500 hover:text-purple-600">User Picture</strong>
          </p>
          <p>
            <strong className="text-2xl text-purple-500 hover:text-purple-600">Username:</strong>{" "}
            {currentUser.username}
          </p>
          <p>
            <strong className="text-2xl text-purple-500 hover:text-purple-600">Role:</strong>{" "}
            {isAdmin ? "Admin" : "User"}
          </p>

          {/* Admin-Specific Content */}
          {isAdmin && (
            <div>
              <button
                onClick={() => setShowAdminBooksModal(true)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4 inline-block"
              >
                Manage Books
              </button>
            </div>
          )}

          {/* Orders Section (Only for non-admins) */}
          {!isAdmin && userOrder.length > 0 ? (
            <div>
              <h2 className="text-lg font-bold mt-6 text-purple-600 hover:text-purple-700">Your Orders:</h2>
              <ul className="mt-4">
                {userOrder.map((order, orderIndex) => (
                  <li key={orderIndex} className="mb-4">
                    <h3 className="text-md font-semibold mb-2 text-purple-600 hover:text-purple-700">
                      Order {orderIndex + 1}:
                    </h3>
                    <ul className="ml-4">
                      {order.map((item, idx) => (
                        <li key={item.id || idx} className="text-sm">
                          {item.title} x {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            !isAdmin && (
              <div>
                <p className="text-purple-600 text-xl hover:text-purple-700">No orders yet. Start shopping now!</p>
                <Link
                  to="/categories"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4 inline-block"
                >
                  Start Shopping
                </Link>
              </div>
            )
          )}
        </div>
      )}

      {/* AdminBooks Modal */}
      {showAdminBooksModal && (
        <AdminBooks onClose={() => setShowAdminBooksModal(false)} />
      )}
    </div>
  );
};

export default Profile;
