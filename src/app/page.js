"use client";

import React, { Suspense } from "react";
import Script from "next/script";
import Home from "./Home/page";
import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import { QuickLinksProvider } from "./context/quickLinks";
import { SiteSettingsProvider } from "./context/SiteSettingsContext";

const Root = () => {
  // Schema.org JSON-LD structured data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nouse Homes",
    url: "https://www.nousehomes.com",
    logo: "https://www.nousehomes.com/logo.png", // update with real logo path
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9876543210", // replace with real number
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
    sameAs: [
      "https://www.facebook.com/nousehomes",
      "https://www.instagram.com/nousehomes",
      "https://twitter.com/nousehomes",
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <SiteSettingsProvider>
        <QuickLinksProvider>
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
         
            <LoginPage />
          </Suspense>
        </QuickLinksProvider>
      </SiteSettingsProvider>
    </>
  );
};

export default Root;
