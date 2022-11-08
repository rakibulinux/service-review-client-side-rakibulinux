import React, { useContext } from "react";
import OrderReview from "../../assets/OrderReview.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("User Logout success");
      })
      .catch(() => {
        toast.error("User logout success");
      });
  };
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-250" : "")}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-250" : "")}
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-250" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>

      {!user?.uid ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-250" : "")}
              to="/login"
            >
              LogIn
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-250" : "")}
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-250" : "")}
              to="/my-reviews"
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-250" : "")}
              to="/add-service"
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>SignOut</button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto flex shadow-2xl justify-between mb-5 text-blue-950">
      <div className="">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-green-250 hover:bg-green-350 border-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            {navItems}
          </ul>
        </div>
        <NavLink
          to="/"
          className="normal-case text-2xl flex items-center font-bold"
        >
          <img src={OrderReview} alt="charity" className="h-7 mr-3" />
          Order Review
        </NavLink>
      </div>
      <div>
        <div className="hidden lg:flex">
          <ul className="flex gap-5 font-bold">{navItems}</ul>
        </div>
        <div className="ml-3">
          <img
            className="w-8 h-8 rounded-full"
            src={user?.photoURL}
            alt=""
            title={user?.displayName}
          />
          {/* <NavLink to="/my-reviews">
            <button className="bg-green-250 hover:bg-green-350 py-2 px-4 rounded-3xl text-white font-bold">
              Review Us
            </button>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
