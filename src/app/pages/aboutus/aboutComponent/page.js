"use client";

import { useEffect, useState } from "react";
import BanenerComponent from "@/app/BannerComponent/page";
import Footer from "@/app/Footer/page";
import Header from "@/app/Header/page";
import { getContent2 } from "@/contentful/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";

import CoreTeam from "../coreteam/page";
import FeatureSection from "@/app/FeatureSection/page";
import AnnounceContent from "@/app/AnounceContent/page";
import Status from "../status/page";
import Why from "../why/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import HomeIcons from "@/app/HomeIcons/page";
import QuickLinksFloatingPanel from "@/app/QuickLinksFloatingPanel/page";
import { SiteSettingsProvider } from "@/app/context/SiteSettingsContext";


 
const AboutUs = () => {
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("aboutUsPage");
        const fields = entries[0]?.fields;

        const banner = fields?.banner?.fields;
        const paragraphSection = fields?.paragraphSectionData?.fields;
        const features = fields?.featuresData?.fields;
        const coreTeam = fields?.coreTeam?.fields;
        const secondAnnouncement = fields?.secondAnnouncementData?.fields;
        const statusData = fields?.statusdata?.fields;

        // Extract background image for core team
        const bgImage = coreTeam?.bgImage?.fields?.file?.url
          ? `https:${coreTeam.bgImage.fields.file.url}`
          : "";

     
       

        setHomeData({
          banner: {
            image: banner?.image?.fields?.file?.url
              ? `https:${banner.image.fields.file.url}`
              : "",
            title: banner?.title,
            subtitle: banner?.subtitle,
          },
          paragraphSectionData: paragraphSection,
          featuresData: features,
          coreTeam: {
            bgImage,
            coreTitle: coreTeam?.title || "",
            coreSubtitle: coreTeam?.subtitle || "",
            teamData:coreTeam?.teamMembers || [],
          },
          statusData:statusData,
          secondAnnouncementData: secondAnnouncement,
        });
      } catch (err) {
        console.error("❌ Error fetching about data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  if (!homeData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }
 
 

  return (
    <div>
       <SiteSettingsProvider>
      <QuickLinksProvider>
        <Header />
        <HomeIcons />
              <QuickLinksFloatingPanel  />
        <BanenerComponent data={homeData.banner} />
       <Why data={homeData.paragraphSectionData} />
        <Status statusSection={homeData.statusData} />
        {/* <FeatureSection data={homeData.featuresData} /> */}
        <CoreTeam
          bgImage={homeData.coreTeam.bgImage}
          title={homeData.coreTeam.coreTitle}
          subtitle={homeData.coreTeam.coreSubtitle}
          teamMembers={homeData.coreTeam.teamData}
        />
        <AnnounceContent announcementData={homeData.secondAnnouncementData} />
        <Footer />
      </QuickLinksProvider></SiteSettingsProvider>
    </div>
  );
};

export default AboutUs;
