const Status = ({ statusSection }) => {
  if (!statusSection) return null;

  const backgroundImageUrl = statusSection?.backgroundImage?.fields?.file?.url;
  const statusItems = statusSection?.statusItem || [];

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
        {statusItems.map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold">{item.fields?.value}+</h2>
            <p className="text-xl mt-2">{item.fields?.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
