"use client";

const CoreTeam = ({ bgImage, title, subtitle, teamMembers }) => {

  
  return (
    <div
      className="bg-cover bg-center py-10 px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
       
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center text-white mb-16">
        <p className="uppercase tracking-widest text-gray-300 mb-8 text-2xl md:text-4xl">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {teamMembers?.map((member, idx) => {
          const memberFields = member?.fields || {};
          const imageUrl = memberFields?.imageUrl?.fields?.file?.url
            ? `https:${memberFields.imageUrl.fields.file.url}`
            : "";

          return (
            <div
              key={idx}
              className="bg-[#111111] bg-opacity-80 rounded-2xl shadow-xl overflow-hidden text-center text-white p-6 flex flex-col items-center"
            >
              <div className="w-40 h-40 relative mb-4 rounded-lg overflow-hidden shadow-md">
                <img
                  src={imageUrl}
                  alt={memberFields?.name || "Team Member"}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-lg">{memberFields?.name}</h3>
              <p className="text-sm text-gray-300 mt-1">
                {memberFields?.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreTeam;
