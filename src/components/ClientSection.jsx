import { motion } from "framer-motion";

const ClientSection = ({ clientLog }) => {
  const scrollDuration = 25; // Adjust scroll speed

  const scrollVariants = (direction) => ({
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    },
    transition: {
      duration: scrollDuration,
      ease: "linear",
      repeat: Infinity,
    },
  });

  return (
    <section className="py-3 md:py-12 bg-gray-50">
      <div className="mx-auto">
        <h2 className="text-title-sm md:text-title-md font-bold text-center text-gray-800 mb-8 w-10/12 md:w-full mx-auto">
          Trusted by Market Leaders
        </h2>
      </div>

      {/* Scrolling image container from right to left */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-32"
          animate={scrollVariants("left").animate}
          transition={scrollVariants("left").transition}
        >
          {clientLog.concat(clientLog).map((client, index) => (
            <div
              key={index}
              className="relative min-w-[150px] md:min-w-[200px] flex justify-center items-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="object-contain"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling image container from left to right (opposite direction) */}
      <div className="relative w-full overflow-hidden mt-8">
        <motion.div
          className="flex gap-32"
          animate={scrollVariants("right").animate}
          transition={scrollVariants("right").transition}
        >
          {clientLog.concat(clientLog).map((client, index) => (
            <div
              key={index}
              className="relative min-w-[150px] md:min-w-[200px] flex justify-center items-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="object-contain"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
