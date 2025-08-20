import React, { Suspense } from "react";
import ContentPage from "./contentPage";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import { SiteSettingsProvider } from "@/app/context/SiteSettingsContext";
export default function Content() {
  return (
    <SiteSettingsProvider>
      <QuickLinksProvider>
        <Suspense>
          <ContentPage />
        </Suspense>
      </QuickLinksProvider>
    </SiteSettingsProvider>
  );
}
