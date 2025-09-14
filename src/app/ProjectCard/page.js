"use client";
import { useEffect, useState } from "react";

import LoadingSpinner from "@/app/LoadingSpinner/page";

import { getContent2 } from "@/contentful/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import ProjectView from "@/app/ProjectView/page";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
import AnimationWrapper from "../AnimationWrapper/page";
const ProjectCard = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);
  const [showViewer, setShowViewer] = useState(false);
  const [galleryData, setGalleryData] = useState({ images: [], info: {} });

  const { settings } = useSiteSettings() || {};
  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("ourprojectspage");
        const fields = entries[0]?.fields;
        const resolvedProjects = (fields.projects || []).map((project, idx) => {
          const galleryItem =
            project.fields?.projectsGallery?.[0]?.fields || {};
          const galleryImages =
            galleryItem.images?.map((img) => img.fields?.file?.url) || [];

          return {
            id: project.sys?.id || "",
            projectname: project.fields?.projectname || "",
            image: project.fields?.image?.fields?.file?.url || "",
            projectsGallery: galleryImages,
            info: {
              title: galleryItem.title || "",
              location: galleryItem.location || "",
              floorArea: galleryItem.floorArea || "",
              plotArea: galleryItem.plotArea || "",
            },
          };
        });

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

  const openViewer = (project) => {
    setGalleryData({
      images: project.projectsGallery,
      info: project.info,
    });
    setShowViewer(true);
  };

  if (error) return <div>Error loading content: {error}</div>;
  if (!projectData) return <LoadingSpinner />;

  return (
    <div>
      <QuickLinksProvider>
        <div
          className="w-full bg-gray-100 py-12"
          style={{
            backgroundImage: `url(${projectData.bgimage})`,
            fontFamily: settings?.fontFamily,
  
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {projectData.projects.map((project, idx) => (
              <AnimationWrapper key={idx} type="fadeInLeft">
              <div
                key={project.id || idx}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={project.image || "/placeholder.jpg"}
                  alt={project.projectname}
                  className="w-full h-[248px] min-h-[248px] max-h-[248px] object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold  mt-4 min-h-[48px] max-h-[48px] overflow-hidden" style={{color:"black"}}>
                  {project.projectname}
                </h3>
                <div className="flex items-center justify-center">
                  {projectData.buttonText && (
                    <button
                     style={{
              background: settings?.buttonColor,
              color: settings?.fontColor,
            }}
                      onClick={() => openViewer(project)}
                      className="cursor-pointer mt-4 flex justify-center w-1/2 md:w-full py-2 px-4 rounded-lg  transition"
                    >
                      {projectData.buttonText}
                    </button>
                  )}
                </div>
              </div></AnimationWrapper>
            ))}
          </div>
        </div>

        {showViewer && (
          <ProjectView
            images={galleryData.images}
            info={galleryData.info}
            onClose={() => setShowViewer(false)}
          />
        )}
      </QuickLinksProvider>
    </div>
  );
};

export default ProjectCard;
