import React from "react";

const Button = ({ outline, link, children }) => {
  return outline ? (
    <a
      href={link}
      className="border-background text-background pl-3 pr-1 pt-1 md:px-8 md:py-3 border rounded-full text-sm md:text-lg font-semibold transition duration-300  mx-auto"
    >
      {children}
    </a>
  ) : (
    <a
      href={link}
      className="bg-background text-white pl-3 pr-1 pt-1 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-red-600 transition duration-300 mx-auto"
    >
      {children}
    </a>
  );
};

export default Button;
