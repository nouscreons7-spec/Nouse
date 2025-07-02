"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import Banner from "../HomeBanner/page";
import CompletedProjects from "../FirstSection/page";
import ProjectSection from "../ProjectSection/page";
import AnnounceContent from "../AnounceContent/page";
import Footer from "../Footer/page";
import Message from "../Message/page";
import WhyNous from "../whyNous/page";
import FeatureSection from "../FeatureSection/page";
import TestimonialSection from "../TestimonialSection/page";
import EnsureSection from "../EnsureSection/page";
import Advertisement from "../advertisement/page";

import { getContent } from "@/contentful/page";
import LoadingSpinner from "../LoadingSpinner/page";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("homePage"); 
        const fields = entries[0]?.fields;

        setHomeData({
          homebanner: fields.homebanner?.fields || {},
          finishedprojects: fields.finishedprojects?.fields || {},
          projectsSection: fields.projectsSection?.fields || {},
          announcementData: fields.announcementData?.fields || {},
          messageData: fields.messageData?.fields || {},
          paragraphSectionData: fields.paragraphSectionData?.fields || {},
          featuresData: fields.featuresData?.fields || {},
          secondMessageData: fields.secondmessage?.fields || {},
          secondAnnouncementData: fields.secondAnnouncementData?.fields || {},
          testimonialSection: fields.testimonialSection?.fields || {},
        });
      } catch (err) {
        console.error("❌ Error fetching homepage data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

    if (!homeData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Banner data={homeData.homebanner} />
      <CompletedProjects data={homeData.finishedprojects} />
      <ProjectSection data={homeData.projectsSection} />
      <AnnounceContent
      announcementData={homeData.announcementData}
        // backgroundImage={homeData.announcementData.backgroundImage}
        // title={homeData.announcementData.title}
        // buttonText={homeData.announcementData.buttonText}
        // buttonLink={homeData.announcementData.buttonLink}
      />
      <Message
      messageData={homeData.messageData}
        // backgroundImage={homeData.messageData.backgroundImage}
        // text={homeData.messageData.text}
      />
      <WhyNous data={homeData.paragraphSectionData} />
      <FeatureSection data={homeData.featuresData} />
      <Message
      messageData={homeData.secondMessageData}
        // backgroundImage={homeData.secondMessageData.backgroundImage}
        // text={homeData.secondMessageData.text}
      />
      <TestimonialSection data={homeData.testimonialSection} />
      <EnsureSection />
      <Advertisement />
      <AnnounceContent
    announcementData={homeData.secondAnnouncementData}
        // backgroundImage={homeData.secondAnnouncementData.backgroundImage}
        // title={homeData.secondAnnouncementData.title}
        // buttonText={homeData.secondAnnouncementData.buttonText}
        // buttonLink={homeData.secondAnnouncementData.buttonLink}
      />
      <Footer />
    </div>
  );
};

export default Home;
