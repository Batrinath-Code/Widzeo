import React from "react";
import worldMap from '../assets/worldMap.png'
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full mx-0.5 ${
            i === 0 ? "bg-orange-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

const ReviewSection = () => {
  return (
    <>
    <section className="py-16 bg-white">
      <div className=" mx-auto px-10">
        <h2 className="text-7xl font-bold mb-2 text-gray-600">Loved by many</h2>
        <h3 className="text-7xl font-bold mb-8 text-gray-600">
          Trusted by all :)
        </h3>

        <div className=" p-8 rounded-lg">
          <div className="mb-4 text-7xl">01/06</div>
          <div className="px-52">
          <blockquote className="text-6xl mb-6 text-gray-600 ">
            "As a satisfied customer of [Widezo], I want to share my positive
            experience with others. Their software as a service platform has
            greatly improved the efficiency and productivity of our business
            operations. The cloud-based solution is user-friendly and regularly
            updated to stay ahead of the technology"
          </blockquote>
          <div className="flex items-center">
            <img
              src="https://placehold.co/75x75"
              alt="s"
              className="w-30 h-30 rounded-full mr-4"
            />
            <div className="text-3xl">
              <div className="font-semibold">Savannah Nguyen</div>
              <div className="text-gray-600">Bosch Design head</div>
            </div>
            
          </div>
          <div className="mt-4">
            <StarRating rating={1} />
          </div>
          </div>

       

      
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          Connect with clients worldwide.
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Build strong global connections and grow your business internationally.
        </p>
        <img className="mx-auto" src={worldMap} alt="" />
      </div>
    </section>
    </>
  );
};

export default ReviewSection;
