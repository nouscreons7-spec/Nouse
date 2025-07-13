"use client";

import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";
import BanenerComponent from "@/app/BannerComponent/page";

const OurProjects = () => {
  const data = {
    image: "/banner/shade1.jpg",
    title: "Happenings",
    subtitle:
      "Explore the latest milestones, awards, and exciting events that highlight our passion for exceptional design and innovation in the industry.",
    bgimage: "/img/bg-black.jpg",
    buttonText: "Explore Project",
    projects: [
      {
        id: "1",
        projectname: "Luxury Villa Design",
        image: "section2img/home2.jpg",
      },
      {
        id: "2",
        projectname: "Corporate Office Build",
        image: "section2img/home3.jpg",
      },
      {
        id: "16",
        projectname: "Corporate Office Build",
        image: "section2img/home3.jpg",
      },
      {
        id: "3",
        projectname: "Retail Space Innovation",
        image: "section2img/home4.jpg",
      },
      {
        id: "4",
        projectname: "Hospital Interior",
        image: "section2img/home2.jpg",
      },
      {
        id: "5",
        projectname: "Smart Home Layout",
        image: "section2img/home1.jpg",
      },
      {
        id: "163",
        projectname: "Corporate Office Build",
        image: "section2img/home3.jpg",
      },
      {
        id: "33",
        projectname: "Retail Space Innovation",
        image: "section2img/home4.jpg",
      },
      {
        id: "164",
        projectname: "Corporate Office Build",
        image: "section2img/home3.jpg",
      },
      {
        id: "36",
        projectname: "Retail Space Innovation",
        image: "section2img/home4.jpg",
      },
    ],
  };

  return (
    <div>
      <Header />
      <BanenerComponent data={data} />

      <div className="w-full bg-gray-100 py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image || "/placeholder.jpg"}
                alt={project.projectname}
                className="w-full h-[248px] min-h-[248px] max-h-[248px] object-cover rounded-lg"
                />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 min-h-[48px] max-h-[48px] overflow-hidden">
                {project.projectname}
              </h3>
              {data.buttonText && (
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
                  {data.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProjects;
