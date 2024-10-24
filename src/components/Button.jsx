import React from "react";

const Button = ({ outline, link, children }) => {
  return outline ? (
    <a
      href={link}
      className="border-background text-background p-2 ps-4 border rounded-full text-xs lg:text-lg font-semibold transition duration-300  mx-auto"
    >
      {children}
    </a>
  ) : (
    <a
      href={link}
      className="bg-background text-white p-2 ps-4 rounded-full text-xs lg:text-lg font-semibold hover:bg-red-600 transition duration-300 mx-auto"
    >
      {children}
    </a>
  );
};

export default Button;
