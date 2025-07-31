"use client";

import { useEffect, useState } from "react";
import BanenerComponent from "@/app/BannerComponent/page";
import Footer from "@/app/Footer/page";
import Header from "@/app/Header/page";
import { getContent2 } from "@/contentful/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";


import CoreTeam from "./coreteam/page";
import FeatureSection from "@/app/FeatureSection/page";
import AnnounceContent from "@/app/AnounceContent/page";
import Status from "./status/page";
import Why from "./why/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import HomeIcons from "@/app/HomeIcons/page";

const AboutUs = () => {
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("aboutuspage");
        const fields = entries[0]?.fields;

        // Extract asset URLs
        const imageUrl = fields.image?.fields?.file?.url
          ? `https:${fields.image.fields.file.url}`
          : "";
        const bgImage = fields.bgImage?.fields?.file?.url
          ? `https:${fields.bgImage.fields.file.url}`
          : "";

        setHomeData({
          banner: {
            image: imageUrl,
            title: fields.title,
            subtitle: fields.subtitle,
          },
          paragraphSectionData: fields.paragraphSectionData,
          status: fields.status,
          featuresData: fields.featuresData,
          coreTeam: {
            bgImage: bgImage,
            coreTitle: fields.coreTitle,
            coreSubtitle: fields.coreSubtitle,
            teamData: fields.teamData,
          },
          secondAnnouncementData: fields.announcement,
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
    return <div><LoadingSpinner /></div>;
  }



  return (
    <div>
      <QuickLinksProvider>
        <Header />
        <HomeIcons />
        <BanenerComponent data={homeData.banner} />
        <Why data={homeData.paragraphSectionData.fields} />
        <Status status={homeData.status} />
        <FeatureSection data={homeData.featuresData.fields} />
        <CoreTeam
          bgImage={homeData.coreTeam.bgImage}
          title={homeData.coreTeam.coreTitle}
          subtitle={homeData.coreTeam.coreSubtitle}
          teamMembers={homeData.coreTeam.teamData}
        />
        <AnnounceContent announcementData={homeData.secondAnnouncementData.fields} />
        <Footer />
      </QuickLinksProvider>
    </div>
  );
};

export default AboutUs;
