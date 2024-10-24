import React, { useState } from "react";
import logo from '../assets/logo.png';
const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
          <img src={logo} alt="widzeo logo"  />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-600">
              Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <a href="/home" className="hover:text-gray-600">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-600">
            Shop
          </a>
          <a href="/pages" className="hover:text-gray-600">
            Pages
          </a>
          <a href="/integrations" className="hover:text-gray-600">
            Integrations
          </a>
          <a href="/developers" className="hover:text-gray-600">
            Developers
          </a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="/home" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="/shop" className="block px-4 py-2 hover:bg-gray-100">
            Shop
          </a>
          <a href="/pages" className="block px-4 py-2 hover:bg-gray-100">
            Pages
          </a>
          <a href="/integrations" className="block px-4 py-2 hover:bg-gray-100">
            Integrations
          </a>
          <a href="/developers" className="block px-4 py-2 hover:bg-gray-100">
            Developers
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
