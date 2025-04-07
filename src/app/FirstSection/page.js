import SecondSection from "../secondSection/page";

const FirstSection = () => {
    const data = {
      title: "WHAT WE DO",
      subtitle: "We will help you build your dream home",
      description:
        "We are experienced Architectural Consultants who can make your dream of a luxurious home come true. Our aim is to deliver aesthetically appealing high-end residential homes.",
      image: "/img/grat.jpeg",
    };
  
    return (
      <div
        className="py-16 bg-cover bg-center h-auto flex flex-col items-center justify-center text-center w-full"
        style={{ backgroundImage: `url(${data.image})` }} 
      >
        <div className="text-center  w-[50%] ">
        <h2 className="text-gray-500 text-4xl font-semibold uppercase ">
          {data.title}
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-black mt-4 leading-tight">
          {data.subtitle}
        </h1>
        <p className="text-lg text-gray-700 mt-6 mb-20 ">{data.description}</p>
        </div>
        <SecondSection />
      </div>
    );
  };
  
  export default FirstSection;
  