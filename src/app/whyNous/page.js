import Image from 'next/image';

const WhyNous = () => {
  // Dynamic Data
  const data = {
    backgroundImage: "/section2img/home4.jpg",  // Path from public folder
    title: "WHY Nous",
    heading: "Experience, excellence and commitment",
    description:
      "Guided by our years of experience, we build you customised luxurious homes which suit your needs and personality.",
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-[500px] bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
     

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-4 ">
        <h3 className="text-gray-300  mb-10 text-4xl">{data.title}</h3>
        <h1 className="text-white text-4xl md:text-5xl font-bold  mb-10 ">
          {data.heading}
        </h1>
        <p className="text-gray-300 text-base md:text-xl">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default WhyNous;
