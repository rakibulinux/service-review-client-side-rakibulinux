import React from "react";
import OrderReview from "../../assets/OrderReview.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Events</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>LogIn</NavLink>
      </li>
      <li>
        <NavLink>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto flex shadow-2xl justify-between mb-5">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        <Link className="normal-case text-2xl flex items-center font-bold">
          <img src={OrderReview} alt="charity" className="h-7 mr-3" />
          Order Review
        </Link>
      </div>
      <div>
        <div className="hidden lg:flex">
          <ul className="flex gap-5 font-bold">{navItems}</ul>
        </div>
        <div className="ml-3">
          <button className="bg-green-250 hover:bg-pink-600 py-2 px-4 rounded-3xl text-white font-bold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
