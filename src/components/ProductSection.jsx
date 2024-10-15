import React from "react";
import staticImg from "../assets/staticImg.svg";
import Button from "./Button";
import BlackButton from "./BlackButton";

const ProductCard = ({ name, description, logoSrc, screenshotsSrc, left }) => (
  <div
    className={ `flex ${left ? "flex-col-reverse" :"flex-col"} md:flex-row items-center justify-end gap-8 mb-16`}
  >
    <div className="w-full md:w-1/3">
      <img src={logoSrc} alt={`${name} logo`} className="h-12 mb-4 mx-auto md:mx-0" />
      <p className="text-gray-600 mb-6 text-2xl text-center md:text-left">{description}</p>
      <div className="flex gap-4">
        <Button>
          Explore Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline m-1 mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button outline={true}>
          Trial now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline m-1 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
    <div className={`w-full md:w-2/3  ${left ? "order-first" : "order-last"}`}>
      <img
        src={screenshotsSrc}
        alt={`${name} screenshots`}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  </div>
);

const ProductSection = ({ data }) => {
  const medzoData = data.products[0];
  const edzoData = data.products[1];
  return (
    <>
      <section className="py-0 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-title-sm md:text-title-md text-gray-800 font-bold text-center mb-16">
            {data.titleText}
          </h1>

          <ProductCard
            name={medzoData.name}
            description={medzoData.description}
            logoSrc={medzoData.logo}
            screenshotsSrc={medzoData.mainImg}
          />

          <ProductCard
            left={true}
            name={edzoData.name}
            description={edzoData.description}
            logoSrc={edzoData.logo}
            screenshotsSrc={edzoData.mainImg}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-title-sm md:text-title-md font-bold text-center text-gray-800 mb-16">
            Our services
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={staticImg}
                alt="Product designer working at a desk with a computer"
                className="w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-title-sm md:text-[48px] font-bold mb-4"> Design</h2>
              <p className="text-description-sm md:text-[24px] text-gray-600 mb-6">
                Our design experts create visually stunning and user-friendly
                interfaces that resonate with your audience. We craft
                responsive, brand-aligned designs that offer seamless
                experiences across all devices. Every pixel is designed to
                captivate and engage.-
                <b className="text-gray-600">”Craft. Create. Captivate.”</b>
              </p>
              <BlackButton text="Explore more" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={staticImg}
                alt="Product designer working at a desk with a computer"
                className="w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-title-sm md:text-[48px] font-bold mb-4"> Development</h2>
              <p className="text-description-sm md:text-[24px] text-gray-600 mb-6">
                We craft scalable, powerful apps that push your business higher.
                Mobile or web, our solutions are fast, secure, and built to
                inspire. Seamless performance, flawless flow, tailored to your
                desire.-
                <b className="text-gray-600">“Design. Develop. Deliver.”</b>
              </p>
              <BlackButton text="Explore more" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
