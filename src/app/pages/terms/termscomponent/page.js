"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Footer/page";
import Header from "@/app/Header/page";
import LoadingSpinner from "@/app/LoadingSpinner/page";
import { getContent2 } from "@/contentful/page";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import { SiteSettingsProvider } from "@/app/context/SiteSettingsContext";


const Terms = () => {
  const [termsData, setTermsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const entries = await getContent2("termssection");
        const fields = entries[0]?.fields;

        const resolvedSections = (fields.section || []).map((entry) => ({
          title: entry.fields?.title || "",
          content: entry.fields?.content || "",
          list: entry.fields?.list || [],
        }));

        const formattedData = {
          title: fields.title || "",
          intro: fields.intro || "",
          sections: resolvedSections,
        };

        setTermsData(formattedData);
      } catch (err) {
        console.error("❌ Error fetching terms data:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error loading content: {error}</div>;
  if (!termsData) return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  return (
    <SiteSettingsProvider>
      <QuickLinksProvider>
        <div className="flex flex-col">
          <Header />
          <div className="bg-black text-white  px-6 pt-40">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
                {termsData.title}
              </h1>

              <p className=" mb-6">{termsData.intro}</p>

              {termsData.sections.map((section, index) => (
                <section className="mb-8" key={index}>
                  <h2 className="text-xl font-semibold mb-2">
                    {section.title}
                  </h2>
                  <p className=" mb-2">{section.content}</p>
                  {section.list && section.list.length > 0 && (
                    <ul className="list-disc list-inside  space-y-1">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </QuickLinksProvider>
    </SiteSettingsProvider>
  );
};

export default Terms;
