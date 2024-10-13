const ClientSection = ({ clientLog }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto ">
        <h2 className="text-title-sm md:text-title-md font-bold text-center text-gray-800 mb-8">
          Trusted by Market Leaders
        </h2>
        <div className="flex justify-between mb-3">
          {clientLog.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={`${client.name} logo`}
              className=" object-contain filter grayscale w-[200px]"
            />
          ))}
        </div>
        <div className="flex justify-between">
          {clientLog.toReversed().map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={`${client.name} logo`}
              className="object-contain filter grayscale  w-[200px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
