import React from "react";
import sericeImg from "../assets/serviceImg.png";

const ServiceCard = ({ item }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
      <img src={item.logo} alt="svg" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
    <p className="text-gray-600 text-center">{item.description}</p>
  </div>
);

const ServiceSection = ({ data }) => {
  return (
    <section className="py-16  bg-white">
      <h1 className="text-title-sm md:text-title-md text-gray-800 font-bold text-center mb-4 ">
        {data.titleText}
      </h1>
      <p className="text-description-sm md:text-description-md text-center text-gray-600 mb-12 w-1/3 mx-auto">
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
            <button className="bg-background text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
              Get a consultation
            </button>
          </div>
        </div>

        <img className="w-1/2 hidden md:block" src={sericeImg} alt="widzeo" />
      </div>
    </section>
  );
};

export default ServiceSection;
