"use client";
import { useEffect, useState } from "react";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";
import BanenerComponent from "@/app/BannerComponent/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import HomeIcons from "@/app/HomeIcons/page";

import { getContent2 } from "@/contentful/page";

const OurProjects = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("ourprojectspage");
        const fields = entries[0]?.fields;

        const resolvedProjects = (fields.projects || []).map((project) => ({
          id: project.sys?.id || "",
          projectname: project.fields?.projectname || "",
          image: project.fields?.image?.fields?.file?.url || "",
        }));

        const formattedData = {
          title: fields.title || "",
          subtitle: fields.subtitle || "",
          image: fields.image?.fields?.file?.url || "",
          bgimage: fields.bgimage?.fields?.file?.url || "",
          buttonText: fields.buttonText || "",
          projects: resolvedProjects,
        };

        setProjectData(formattedData);
      } catch (err) {
        console.error("❌ Error fetching project page data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error loading content: {error}</div>;
  if (!projectData) return <LoadingSpinner />;

  return (
    <div>
      <Header />
      <HomeIcons />
      <BanenerComponent
        data={{
          title: projectData.title,
          subtitle: projectData.subtitle,
          image: projectData.image,
        }}
      />

      <div
        className="w-full bg-gray-100 py-12 px-6"
        style={{ backgroundImage: `url(${projectData.bgimage})` }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projectData.projects.map((project, idx) => (
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
              {projectData.buttonText && (
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
                  {projectData.buttonText}
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
