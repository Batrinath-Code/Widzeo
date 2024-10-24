import { useScroll, useTransform, motion } from "framer-motion";
import design from "../assets/design.svg";
import development from "../assets/development.svg";
import software from "../assets/software.svg";
import BlackButton from "./BlackButton";
import { useRef } from "react";

const SerivesShowCaseSection = ({ data }) => {
  console.log(data);
  
  const targetRef = useRef(null);

  // Use Framer Motion's useScroll and useTransform to create the scroll-based x-axis movement
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Transform for horizontal scrolling effect
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-105%"]);

  return (
    <section className="p-0 lg:py-16 bg-gray-50" ref={targetRef}>
      <div className="container mx-auto px-4 ">
        <h1 className="text-title-sm md:text-title-md font-bold text-center text-gray-800 m-0 lg:mb-16">
          Our services
        </h1>
      </div>

      {/* Create a long vertical container to scroll through */}
      <div className="h-[200vh] relative ">
        {/* Sticky horizontal container */}
        <div className="sticky top-0 h-[100vh] flex items-center justify-start overflow-hidden ">
          {/* Horizontal scrolling effect */}
          <motion.div
            className="flex gap-8 w-[200vw] relative" // Make the container wide enough to hold both sections
            style={{ x }} // Link horizontal motion to scroll
          >
            {data.services.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-8 min-w-[100vw]">
                <div className="w-full md:w-1/2">
                  <img
                    src={item.img}
                    alt={idx.title}
                    className="w-[80%] lg:w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl lg:text-[48px] font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="w-[80%] text-description-sm lg:text-[24px] text-gray-600 mb-6">
                    {item.description}
                    {item.important ? (
                      <b className="text-gray-600">{item.important}</b>
                    ) : (
                      ""
                    )}
                  </p>
                  <BlackButton text="Explore more" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SerivesShowCaseSection;
