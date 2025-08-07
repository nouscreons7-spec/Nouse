
'use client';
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getContent } from "@/contentful/page";

import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";
import ImageSlider from "./ImageSlider/page";
import ParagraphSection from "./paragraph/page";
import Status from "./Status/page";
import Message from "@/app/Message/page";
import ArchitectureShowcase from "./ArchitectureShowcase/page";
import FeatureGrid from "./FeatureGrid/page";
import AnnounceContent from "@/app/AnounceContent/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import QuickLinksFloatingPanel from "@/app/QuickLinksFloatingPanel/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import HomeIcons from "@/app/HomeIcons/page";

const ContentPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const keyword = useSearchParams().get("keyword");

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent(keyword);
        const fields = entries[0]?.fields || {};
        setData({
          navItems: fields.navItems?.map((i) => i.fields) || [],
          sliderData: fields.sliderData?.fields,
          paragraphSectionData: fields.paragraphSectionData?.fields,
          status: fields.status?.map((i) => i.fields) || [],
          secondMessageData: fields.secondMessageData?.fields,
          architechData: fields.architechData?.fields,
          features: fields.features?.fields,
          announcementData: fields.announcementData?.fields,
          messageData: fields.messageData?.fields,
        });
      } catch (err) {
        setError(err.message);
        console.error("Error fetching content:", err);
      }
    }

    if (keyword) fetchData();
  }, [keyword]);

  if (error) return <div className="text-red-600 p-6">Error: {error}</div>;
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const {
    sliderData,
    paragraphSectionData,
    status,
    secondMessageData,
    architechData,
    features,
    messageData,
    announcementData,
  } = data;

  return (
  
    <QuickLinksProvider>
      <Header />
<QuickLinksFloatingPanel  />
<HomeIcons /> 
      {sliderData && (
        <ImageSlider
          images={sliderData.images}
          title={sliderData.title}
          description={sliderData.description}
        />
      )}

      {paragraphSectionData?.backgroundImage?.fields?.file?.url && (
        <ParagraphSection paragraphSectionData={paragraphSectionData} />
      )}

      <Status status={status} />

      {secondMessageData && <Message messageData={secondMessageData} />}
      {architechData && <ArchitectureShowcase architechData={architechData} />}
      {features && <FeatureGrid features={features} />}
      {messageData && <Message messageData={messageData} />}
      {announcementData && (
        <AnnounceContent announcementData={announcementData} />
      )}

      <Footer />
    </QuickLinksProvider>
  );
};

export default ContentPage;
