"use client";
import { useEffect, useState } from "react";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";
import BanenerComponent from "@/app/BannerComponent/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import HomeIcons from "@/app/HomeIcons/page";
import QuickLinksFloatingPanel from "@/app/QuickLinksFloatingPanel/page";
import { getContent2 } from "@/contentful/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import ProjectCard from "@/app/ProjectCard/page";
import { SiteSettingsProvider } from "@/app/context/SiteSettingsContext";
const OurProjects = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

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

 

  if (error) return <div>Error loading content: {error}</div>;
  if (!projectData) return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div>
      <SiteSettingsProvider>
      <QuickLinksProvider>
        <Header />
        <QuickLinksFloatingPanel />
        <HomeIcons />
        <BanenerComponent
          data={{
            title: projectData.title,
            subtitle: projectData.subtitle,
            image: projectData.image,
          }}
        />

        <ProjectCard />

        <Footer />
      </QuickLinksProvider></SiteSettingsProvider>
    </div>
  );
};

export default OurProjects;
