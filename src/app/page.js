import React, { Suspense } from "react";
import Home from "./Home/page";

import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import { QuickLinksProvider } from "./context/quickLinks";
import { SiteSettingsProvider } from "./context/SiteSettingsContext";

const Root = () => {
  return (
    <div>
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
    </div>

   
  );
};

export default Root;
