import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear the user state in the context
      setAuthUser({ user: null });

      // Clear the localStorage as well
      localStorage.removeItem("Users");

      // Display a success message
      toast.success("Logout successfully");

      // Reload the page after 3 seconds (to reset the application state)
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      // Handle any errors
      toast.error("Error: " + error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
