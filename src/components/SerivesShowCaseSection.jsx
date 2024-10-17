import { useScroll, useTransform, motion } from "framer-motion";
import design from "../assets/design.svg";
import development from "../assets/development.svg";
import BlackButton from "./BlackButton";
import { useRef } from "react";

const SerivesShowCaseSection = () => {
  const targetRef = useRef(null);

  // Use Framer Motion's useScroll and useTransform to create the scroll-based x-axis movement
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Transform for horizontal scrolling effect
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  return (
    <section className="py-16 bg-grey " ref={targetRef}>
      <div className="container mx-auto px-4 ">
        <h1 className="text-title-sm md:text-title-md font-bold text-center text-gray-800 mb-16">
          Our services
        </h1>
      </div>

      {/* Create a long vertical container to scroll through */}
      <div className="h-[300vh] relative bg-gray-50 ">
        {/* Sticky horizontal container */}
        <div className="sticky top-0 h-[100vh] flex items-center justify-start overflow-hidden ">
          {/* Horizontal scrolling effect */}
          <motion.div
            className="flex gap-8 w-[200vw] relative" // Make the container wide enough to hold both sections
            style={{ x }} // Link horizontal motion to scroll
          >
            {/* Section 1: Design */}
            <div className="flex flex-col md:flex-row items-center gap-8 min-w-[100vw]">
              <div className="w-full md:w-1/2">
                <img
                  src={design}
                  alt="Product designer working at a desk with a computer"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-title-sm md:text-[48px] font-bold mb-4">
                  Design
                </h2>
                <p className="text-description-sm md:text-[24px] text-gray-600 mb-6">
                  Our design experts create visually stunning and user-friendly
                  interfaces that resonate with your audience. We craft
                  responsive, brand-aligned designs that offer seamless
                  experiences across all devices.
                  <b className="text-gray-600">”Craft. Create. Captivate.”</b>
                </p>
                <BlackButton text="Explore more" />
              </div>
            </div>

            {/* Section 2: Development */}
            <div className="flex flex-col md:flex-row items-center gap-8 min-w-[100vw]">
              <div className="w-full md:w-1/2">
                <img
                  src={development}
                  alt="Product designer working at a desk with a computer"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-title-sm md:text-[48px] font-bold mb-4">
                  Development
                </h2>
                <p className="text-description-sm md:text-[24px] text-gray-600 mb-6">
                  We craft scalable, powerful apps that push your business
                  higher. Mobile or web, our solutions are fast, secure, and
                  built to inspire.
                  <b className="text-gray-600">“Design. Develop. Deliver.”</b>
                </p>
                <BlackButton text="Explore more" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SerivesShowCaseSection;
