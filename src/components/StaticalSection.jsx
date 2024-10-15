import React from "react";

const Statistic = ({ number, title, description }) => (
  <div className="text-center">
    <div className="text-5xl font-bold mb-2">{number}</div>
    <div className=" text-xl text-nowrap font-semibold mb-2">{title}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StaticalSection = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-title-sm md:text-title-md font-bold text-center mb-4">
          {data.titleText}
        </h2>
        <p className="text-description-sm md:text-description-md text-center text-gray-600 mb-12">
          {data.descriptionText}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2 mx-auto">
          {data.card.map((item, index) => (
            <Statistic
              key={index}
              number={item.title}
              title={item.subTitle}
              description=""
            />
          ))}
          {/* <Statistic
            number="4,000+"
            title="Global customers"
            description="We've helped over 4,000 amazing global companies."
          />
          <Statistic
            number="600%"
            title="Return on investment"
            description="Our customers have reported an average of ~600% ROI."
          />
          <Statistic
            number="10k"
            title="Global downloads"
            description="Our app has been downloaded over 10k times."
          />
          <Statistic
            number="200+"
            title="5-star reviews"
            description="We're proud of our 5-star rating with over 200 reviews."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default StaticalSection;
