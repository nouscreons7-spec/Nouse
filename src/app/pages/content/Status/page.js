const Status = ({ status }) => {
  if (!status) return null;
  const backgroundImageUrl = status[0]?.backgroundImage?.fields?.file?.url;
  console.log(status, "📦 status content");
return (
  <div
    className="bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8 md:px-16 lg:px-28 text-white"
    style={{
      backgroundImage: backgroundImageUrl
        ? `url(https:${backgroundImageUrl})`
        : "none",
    }}
  >
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 text-center">
      {status.map((item, index) => (
        <div key={index}>
          <h2 className="text-2xl sm:text-3xl font-bold">{item.value}+</h2>
          <p className="text-lg sm:text-xl mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);
}
export default Status;
