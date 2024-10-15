import React from "react";
import circleArrow from "../assets/cricleArrow.png";
const BlackButton = ({ text, white }) => {
  return (
    <button
      className={`${
        white == "true"
          ? "bg-white text-background px-2 rounded-md"
          : "bg-gray-900 text-white pl-4 pr-1 md:pl-6 md:pr-1 rounded-full"
      }   py-1  md:py-2 text-lg font-semibold hover:bg-background transition duration-300`}
    >
      {text}
      {white == "true" ? (
        ""
      ) : (
        <img
          className="inline ml-1 md:ml-3 w-8"
          src={circleArrow}
          alt="arrow button"
        />
      )}
    </button>
  );
};

export default BlackButton;
