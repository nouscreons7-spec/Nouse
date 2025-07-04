const BanenerComponent = ({ data }) => {
  if (!data) return null;
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 transition-all duration-[5000ms] scale-100 animate-zoom">
        <img
          src={data.image}
          alt="Home Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-10 left-10 text-white flex flex-col gap-4 max-w-[90%] sm:max-w-[600px]">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <h4 className="text-2xl font-medium">{data.subtitle}</h4>
      </div>
    </div>
  );
};

export default BanenerComponent;
