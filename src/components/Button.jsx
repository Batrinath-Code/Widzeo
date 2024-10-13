import React from "react";

const Button = ({ outline, link, children }) => {
  return outline ? (
    <a
      href={link}
      className="border-background text-background px-8 py-3 border rounded-full text-lg font-semibold transition duration-300 "
    >
      {children}
    </a>
  ) : (
    <a
      href={link}
      className="bg-background text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
    >
      {children}
    </a>
  );
};

export default Button;
