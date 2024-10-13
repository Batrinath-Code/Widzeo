import React from "react";
import circleArrow from "../assets/cricleArrow.png";
const BlackButton = ({text}) => {
  return (
    <button className="bg-gray-900 text-white pl-6 pr-1 py-2 rounded-full text-lg font-semibold hover:bg-background transition duration-300">
      {text}
      <img className="inline ms-3" src={circleArrow} alt="arrow button" />
    </button>
  );
};

export default BlackButton;
