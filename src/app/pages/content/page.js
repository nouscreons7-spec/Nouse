import React, { Suspense } from "react";
import ContentPage from "./contentPage";
import { QuickLinksProvider } from "@/app/context/quickLinks";
import { NavProvider } from "@/app/context/NavContext";
export default function Content() {
  return (
    <NavProvider>
      <QuickLinksProvider>
        <Suspense>
          <ContentPage /> 
        </Suspense>
      </QuickLinksProvider>
    </NavProvider>
  );
}
