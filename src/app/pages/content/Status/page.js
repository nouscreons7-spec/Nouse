const Status = ({ status }) => {
  const backgroundImageUrl = status[0]?.backgroundImage?.fields?.file?.url;

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-24 px-28 text-white"
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(https:${backgroundImageUrl})`
          : "none",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {status.map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold">{item.value}+</h2>
            <p className="text-xl mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
