"use client";

import React, { useEffect, useState } from "react";
import BanenerComponent from "@/app/BannerComponent/page";
import ContactDetails from "@/app/ContactDetails/page";
import Footer from "@/app/Footer/page";
import Header from "@/app/Header/page";
import MapEmbed from "@/app/MapEmbded/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import { getContent2 } from "@/contentful/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import HomeIcons from "@/app/HomeIcons/page";
import QuickLinksFloatingPanel from "@/app/QuickLinksFloatingPanel/page";

const ContactUs = () => {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("contactpage");
        const fields = entries[0]?.fields;

        const formattedData = {
          title: fields.title || "",
          subtitle: fields.subtitle || "",
          mail: fields.mail || "",
          phoneNumbers: fields.phoneNumbers || [],
          mapImage: fields.mapImage || "",
          officeAddress: fields.officeAddress || "",
          factoryAddress: fields.factoryAddress || "",
          headings: fields.headings || {},
          image: fields.bannerImage?.fields?.file?.url || "",
          bgimage: fields.bgImage?.fields?.file?.url || "",
        };
       console.log(formattedData);
       
        setContactData(formattedData);
      } catch (err) {
        console.error("❌ Error fetching contact page data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error loading content: {error}</div>;
  if (!contactData) return <LoadingSpinner />;


  return (
    <div>
      <QuickLinksProvider>
        <Header />
             <QuickLinksFloatingPanel  />
        <HomeIcons />
        <BanenerComponent
          data={{
            title: contactData.title,
            subtitle: contactData.subtitle,
            image: contactData.image,
          }}
        />
        <div
          className="flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactData.bgimage})` }}
        >
          <div className="bg-opacity-80 w-full flex justify-center items-center flex-col md:flex-row">
            <ContactDetails data={contactData} />
            <MapEmbed image={contactData.mapImage} />
          </div>
        </div>
        <Footer />
      </QuickLinksProvider>
    </div>
  );
};

export default ContactUs;
