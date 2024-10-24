import React from "react";
import Button from "./Button";
// import MultiScrollEffect from "./MultiScrollEffect";
import medzoImg from '../assets/medzoImg.png'
import edzoImg from '../assets/edzoImg.png'


const ProductCard = ({ name, description, logoSrc, screenshotsSrc, left }) => (
  <div
    className={` flex ${
      left ? "flex-col-reverse" : "flex-col"
    } lg:flex-row items-center justify-center mb-9 lg:mb-16 bg-[url('./bgPattern1.svg')] bg-cover bg-no-repeat`}
    style={!left ? {backgroundPosition: 'right -800px  top 30%'} : {background:'none'}}
  >
    <div className="w-full lg:w-[30%]">
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="h-12 mb-4 mx-auto md:mx-0"
      />

      <p className="text-gray-600 mb-6 text-2xl text-center md:text-left leading-loose">
        {description}
      </p>
      <div className=" flex justify-start items-start  sm:mx-auto w-[400px]">
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
    <div
      className={`w-full lg:w-[45%] overflow-hidden  lg:self-end  ${
        left ? "order-first" : "order-last"
      }`}
    >
      {left ?<img className=" sm:100vw "  src={edzoImg} alt="medzo img" /> : <img className=" sm:100vw "  src={medzoImg} alt="medzo img" />}
    </div>
  </div>
);

const ProductSection = ({ data }) => {
  const medzoData = data.products[0];
  const edzoData = data.products[1];
  return (
    <>
      <section className="py-0 lg:py-16 ">
        <div className="w-full px-4 ">
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
    </>
  );
};

export default ProductSection;
