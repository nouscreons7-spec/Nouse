"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import Banner from "../HomeBanner/page";
import CompletedProjects from "../CompletedProjects/page";
import ProjectSection from "../ProjectSection/page";
import AnnounceContent from "../AnounceContent/page";
import Footer from "../Footer/page";
import Message from "../Message/page";
import WhyNous from "../whyNous/page";
import FeatureSection from "../FeatureSection/page";
import TestimonialSection from "../TestimonialSection/page";
import EnsureSection from "../EnsureSection/page";
import Advertisement from "../advertisement/page";
import QuickLinksFloatingPanel from "../QuickLinksFloatingPanel/page";
import { getContent } from "@/contentful/page";
import LoadingSpinner from "../LoadingSpinner/page";
import HomeIcons from "../HomeIcons/page";
import { SiteSettingsProvider } from "../context/SiteSettingsContext";
import AnimationWrapper from "../AnimationWrapper/page";
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
          ensureSection: fields.ensuresection?.fields || {},
          AdvertisementSection: fields.advertisement?.fields || {},
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
      <SiteSettingsProvider>
        <Header />

        <AnimationWrapper stagger={0.4}>
          <Banner data={homeData.homebanner} />
        </AnimationWrapper>
        <QuickLinksFloatingPanel />
        <HomeIcons />
        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <CompletedProjects data={homeData.finishedprojects} />
        </AnimationWrapper>

        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <ProjectSection data={homeData.projectsSection} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <AnnounceContent announcementData={homeData.announcementData} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <Message messageData={homeData.messageData} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <WhyNous data={homeData.paragraphSectionData} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.6}>
          <FeatureSection data={homeData.featuresData} />
        </AnimationWrapper>
        <AnimationWrapper stagger={0.4}>
          <Message messageData={homeData.secondMessageData} />
        </AnimationWrapper>
        <TestimonialSection data={homeData.testimonialSection} />
        <AnimationWrapper type="fadeInDown" stagger={0.4}>
          <EnsureSection data={homeData.ensureSection} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.4}>
          <Advertisement data={homeData.AdvertisementSection} />
        </AnimationWrapper>
        <AnimationWrapper type="zoomIn" stagger={0.4}>
          <AnnounceContent announcementData={homeData.secondAnnouncementData} />
        </AnimationWrapper>
        <AnimationWrapper stagger={0.4}>
          <Footer />
        </AnimationWrapper>
      </SiteSettingsProvider>
    </div>
  );
};

export default Home;
