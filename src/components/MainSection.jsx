import React from "react";
import HeroImg from "../assets/heroImg.svg";
import BlackButton from "./BlackButton";
const MainSection = ({ data }) => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-title-sm md:text-[84px] font-bold mb-4 mx-auto leading-tight ">
          {data.titleText}
        </h1>
        <p className="text-description-sm md:text-description-md text-gray-600 mb-8 ">
          {data.descriptionText}
        </p>
        <BlackButton text="Get In Touch" />
      </div>

      <img
        src={HeroImg}
        alt="Team collaboration illustration"
        className="max-w-full h-auto mx-auto"
      />
    </main>
  );
};

export default MainSection;
