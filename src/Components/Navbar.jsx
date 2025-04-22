import React from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
    const links = (
        <>
          <li className='text-lg hover:text-blue-800 transition'>
            <NavLink to="/" className=  {({ isActive }) => (isActive ? 'text-blue-600 transition' :'' )}>
              Home
            </NavLink>
          </li>
          <li className='text-lg hover:text-blue-800 transition'>
            <NavLink to="/booking" className=  {({ isActive }) => (isActive ? 'text-blue-600 transition' :'' )}>
              Booking
            </NavLink>
          </li>
          <li className='text-lg hover:text-blue-800 transition'>
            <NavLink to="/Blogs" className=  {({ isActive }) => (isActive ? 'text-blue-600 transition' :'' )}>
                Blogs
            </NavLink>
          </li>
          <li className='text-lg hover:text-blue-800 transition'>
            <NavLink to="/Contact" className=  {({ isActive }) => (isActive ? 'text-blue-600 transition' :'' )}>
                Contact
            </NavLink>
          </li>
        </>
      );
    return (
<div className="navbar bg-gray-100 mx-auto   px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Navbar Start: Logo and Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl text-blue-600 flex items-center gap-2">
          <img src="https://i.ibb.co.com/4wM7Dr11/logo.png" alt="logo-icon" className="h-6 w-6 text-blue-600" />
          HealthCare 
        </NavLink>
      </div>

      {/* Navbar Center: Navigation Menus */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End: Emergency Button */}
      <div className="navbar-end">
        <NavLink to="/emergency" className="btn btn-primary">
        Primary
        </NavLink>
      </div>
    </div>
    );
};

export default Navbar;