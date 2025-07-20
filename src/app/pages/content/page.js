import React, { Suspense } from "react";
import ContentPage from "./contentPage";
import { QuickLinksProvider } from "@/app/context/quickLinks";

export default function Content() {
  return (
 
      <QuickLinksProvider>
        <Suspense>
          <ContentPage /> 
        </Suspense>
      </QuickLinksProvider>
 
  );
}
