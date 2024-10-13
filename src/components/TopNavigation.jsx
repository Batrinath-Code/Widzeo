import React from "react";

const TopNavigation = () => {
  return (
    <nav className="flex items-center gap-5 p-4 bg-white">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold">
          Widez<span className="text-orange-500">o</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <button className="flex items-center space-x-1">
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
    </nav>
  );
};

export default TopNavigation;
