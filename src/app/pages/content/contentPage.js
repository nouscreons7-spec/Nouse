"use client";
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
import AnimationWrapper from "@/app/AnimationWrapper/page";



export async function generateMetadata({ searchParams }) {
  const keyword = searchParams?.keyword;

  if (!keyword) {
    return {
      title: "Nouse Homes | Premium Homes & Architecture in Kerala",
      description:
        "Discover luxury homes and premium architecture by Nouse Homes. Explore our projects, designs, and services.",
    };
  }

  try {
    const entries = await getContent(keyword);
    const fields = entries[0]?.fields;

    return {
      title: `${fields?.pageTitle || keyword} | Nouse Homes`,
      description:
        fields?.pageDescription ||
        `Explore ${keyword} projects and premium homes by Nouse Homes in Kerala.`,
      openGraph: {
        title: `${fields?.pageTitle || keyword} | Nouse Homes`,
        description:
          fields?.pageDescription ||
          `Explore ${keyword} projects and premium homes by Nouse Homes.`,
        url: `https://www.nousehomes.com/content?keyword=${keyword}`,
        images: [
          {
            url: fields?.ogImage?.fields?.file?.url
              ? `https:${fields.ogImage.fields.file.url}`
              : "https://www.nousehomes.com/default-og.jpg",
            width: 1200,
            height: 630,
            alt: fields?.pageTitle || "Nouse Homes Project",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${fields?.pageTitle || keyword} | Nouse Homes`,
        description:
          fields?.pageDescription ||
          `Explore ${keyword} projects and premium homes by Nouse Homes.`,
        images: [
          fields?.ogImage?.fields?.file?.url
            ? `https:${fields.ogImage.fields.file.url}`
            : "https://www.nousehomes.com/default-og.jpg",
        ],
      },
    };
  } catch (err) {
    console.error("SEO Metadata error:", err);
    return {
      title: "Nouse Homes | Premium Homes & Architecture in Kerala",
      description:
        "Discover luxury homes and premium architecture by Nouse Homes. Explore our projects, designs, and services.",
    };
  }
}


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
      <QuickLinksFloatingPanel />
      <HomeIcons />
      <AnimationWrapper>
      {sliderData && (
        <ImageSlider
          images={sliderData.images}
          title={sliderData.title}
          description={sliderData.description}
        />
      )}</AnimationWrapper>

     <AnimationWrapper type="fadeInDown"> {paragraphSectionData?.backgroundImage?.fields?.file?.url && (
        <ParagraphSection paragraphSectionData={paragraphSectionData} />
      )}</AnimationWrapper>

    <AnimationWrapper type="fadeIn">   <Status status={status} /></AnimationWrapper>

     <AnimationWrapper >   {secondMessageData && <Message messageData={secondMessageData} />}</AnimationWrapper>
      <AnimationWrapper > {architechData && <ArchitectureShowcase architechData={architechData} />}</AnimationWrapper>
    <AnimationWrapper >   {features && <FeatureGrid features={features} />}</AnimationWrapper>
     <AnimationWrapper >  {messageData && <Message messageData={messageData} />}</AnimationWrapper > 
    <AnimationWrapper type="zoomIn" stagger={0.4}> {announcementData && (
        <AnnounceContent announcementData={announcementData} />
      )}</AnimationWrapper> 

     <AnimationWrapper stagger={0.4}>  <Footer /></AnimationWrapper>
    </QuickLinksProvider>
  );
};

export default ContentPage;
