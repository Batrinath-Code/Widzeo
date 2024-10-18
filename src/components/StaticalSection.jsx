import React from "react";
import CountAnimation from "./countAnimation";
import { useInView } from "framer-motion"; // Import useInView

const Statistic = ({ number, title, description }) => (
  <div className="text-center">
    <div className="text-5xl font-bold mb-2">
      <CountAnimation value={number} />+ {/* Animated Count */}
    </div>
    <div className="text-xl text-nowrap font-semibold mb-2">{title}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StaticalSection = ({ data }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

  return (
    <section
      ref={ref} // Attach the ref to this section
      className="py-20 bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-title-sm md:text-title-md font-bold text-center mb-4">
          {data.titleText}
        </h2>
        <p className="text-description-sm md:text-description-md text-center text-gray-600 mb-12">
          {data.descriptionText}
        </p>

        {/* Only show stats and start animation when section is in view */}
        {isInView && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2 mx-auto">
            {data.card.map((item, index) => (
              <Statistic
                key={index}
                number={item.title} // Start animation once visible
                title={item.subTitle}
                description=""
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StaticalSection;
