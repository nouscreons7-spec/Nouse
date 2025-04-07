import Image from 'next/image';

const Message = () => {
  // Dummy data
  const heroData = {
    backgroundImage: "/img/grat.jpeg",
    text: "A space to recharge life's batteries."
  };

  return (
    <div
      className="bg-red-400 relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-xl px-6 md:px-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          {heroData.text}
        </h1>
      </div>
    </div>
  );
};

export default Message;
