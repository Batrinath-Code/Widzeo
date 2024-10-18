import React from "react";
import sericeImg from "../assets/serviceImg.png";

const ServiceCard = ({ item }) => (
  <div className="w-4/5 md:w-11/12 bg-gray-100 p-6 rounded-lg shadow-md mx-auto">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
      <img src={item.logo} alt="svg" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
    <p className="text-gray-600 text-center">{item.description}</p>
  </div>
);

const ServiceSection = ({ data }) => {
  return (
    <section className="py-3 md:py-16  bg-white">
      <h1 className="text-title-sm md:text-title-md text-gray-800 font-bold text-center mb-4 ">
        {data.titleText}
      </h1>
      <p className="text-description-sm md:text-description-md text-center text-gray-600 mb-0 md:mb-12 w-10/12 md:w-1/3 mx-auto">
        {data.descriptionText}
      </p>
      <div className="container mx-auto px-4 flex">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-12 mt-10 ">
            {data.serviceCard.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <button className="bg-background text-white px-3 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-red-600 transition duration-300">
              Get a consultation
            </button>
          </div>
        </div>

        <img className="w-1/2 hidden lg:block" src={sericeImg} alt="widzeo" />
      </div>
    </section>
  );
};

export default ServiceSection;
