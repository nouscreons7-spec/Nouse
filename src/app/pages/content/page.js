"use client";
import { useState, useEffect } from "react";
import { getContent } from "@/contentful/page";
import React from "react";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";
import ImageSlider from "./ImageSlider/page";
import ParagraphSection from "./paragraph/page";
import Status from "./Status/page";
import Message from "@/app/Message/page";
import ArchitectureShowcase from "./ArchitectureShowcase/page";
import FeatureGrid from "./FeatureGrid/page";
import AnnounceContent from "@/app/AnounceContent/page";

const Content = () => {
  const [contentData, setContentData] = useState({
    navItems: [],
    sliderData: {},
    paragraphSectionData: {},
    status: [],
    secondMessageData:{},
    architechData: {},
    features: {},
    announcementData: {},
    messageData: {},
  
  
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent("Architecture");

        if (entries.length > 0) {
          const fields = entries[0].fields;
          console.log("Got entries:", entries);
          setContentData((prevData) => ({
            ...prevData,
            navItems: fields.navItems?.map((item) => item.fields) || [],
            sliderData: fields.sliderData?.fields || {},
            paragraphSectionData: fields.paragraphSectionData?.fields || {},
            status: fields.status?.map((item) => item.fields) || [],
            architechData: fields.architechData?.fields || {},
            features: fields.features?.fields || {},
            announcementData: fields.announcementData?.fields || {},
            messageData: fields.messageData?.fields || {},
            secondMessageData: fields.secondMessageData?.fields || {},
           
          }));
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching Architecture content:", err);
      }
    }

    fetchData();
  }, []);

  console.log(contentData.secondMessageData, "secondMessageData");

  return (
    <div>
      {contentData ? (
        <>
          {contentData.navItems.length > 0 &&
            contentData.navItems.map((item, index) => {
              const quote = item.quoteText;
              const cleanedNavItems = item.items.map((nav) => ({
                label: nav.fields.label,
                link: nav.fields.link,
              }));

              return (
                <Header
                  key={index}
                  navItems={cleanedNavItems}
                  quoteText={quote}
                />
              );
            })}
        </>
      ) : (
        "no data found"
      )}
      <ImageSlider
        images={contentData.sliderData.images}
        title={contentData.sliderData.title}
        description={contentData.sliderData.description}
      />
      {contentData.paragraphSectionData &&
        contentData.paragraphSectionData.backgroundImage?.fields?.file?.url && (
          <ParagraphSection
            paragraphSectionData={contentData.paragraphSectionData}
          />
        )}
      <Status status={contentData.status} />
      {contentData.secondMessageData &&
      Object.keys(contentData.secondMessageData).length > 0 ? (
        <Message messageData={contentData.secondMessageData} />
      ) : null}
      {contentData.architechData &&
      Object.keys(contentData.architechData).length > 0 ? (
        <ArchitectureShowcase architechData={contentData.architechData} />
      ) : null}
      {contentData.features && Object.keys(contentData.features).length > 0 ? (
        <FeatureGrid features={contentData.features} />
      ) : null}
      {contentData.messageData &&
      Object.keys(contentData.messageData).length > 0 ? (
        <Message messageData={contentData.messageData} />
      ) : null}
       {contentData.announcementData &&
      Object.keys(contentData.announcementData).length > 0 ? (
        <AnnounceContent announcementData={contentData.announcementData} />
      ) : null}

   <Footer />
    </div>
  );
};

export default Content;
