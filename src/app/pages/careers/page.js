"use client";

import { useEffect, useState } from "react";
import BanenerComponent from "@/app/BannerComponent/page";
import Footer from "@/app/Footer/page";
import Header from "@/app/Header/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import JobList from "./joblist/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import { getContent2 } from "@/contentful/page";
import HomeIcons from "@/app/HomeIcons/page";
import QuickLinksFloatingPanel from "@/app/QuickLinksFloatingPanel/page";
import { SiteSettingsProvider } from "@/app/context/SiteSettingsContext";

const Careers = () => {
  const [careersData, setCareersData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("careers");
        const fields = entries[0]?.fields;
        console.log("Resolved fields:", fields);
        // Resolve job references
        const resolvedJobs = (fields?.jobs || [])
  .filter((job) => job?.fields) // ⬅️ Ensure job.fields exists
  .map((job) => ({
    title: job.fields.title || "",
    location: job.fields.location || "",
    qualification: job.fields.qualification || "",
    experience: job.fields.experience || "",
    notes: Array.isArray(job.fields.notes)
      ? job.fields.notes.map((note) => typeof note === "string" ? note : "")
      : [],
  }));

  
   
        const formattedData = {
          title: fields?.title || "",
          subtitle: fields?.subtitle || "",
          image: fields?.image?.fields?.file?.url || "",
          bgimage: fields?.bgimage?.fields?.file?.url || "",
          jobs: resolvedJobs,
        };

        setCareersData(formattedData);
      } catch (err) {
        console.error("❌ Error fetching careers data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error loading content: {error}</div>;
  if (!careersData) return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
 
  
  return (
    <div>
      <SiteSettingsProvider>
      <QuickLinksProvider>
        <Header />
             <QuickLinksFloatingPanel  />
        <HomeIcons />
        <BanenerComponent
          data={{
            title: careersData.title,
            subtitle: careersData.subtitle,
            image: careersData.image,
          }}
        />
        <JobList jobList={careersData.jobs} bgImage={careersData.bgimage} />
        <Footer />
      </QuickLinksProvider></SiteSettingsProvider>
    </div>
  );
};

export default Careers;
