
import React, { Suspense } from "react";
import ContentPage from "./contentPage";

export default function Content() {
  return (
    <Suspense >
      <ContentPage />
    </Suspense>
  );
}
