import React, { Suspense } from "react";
import Home from "./Home/page";
import OurProjects from "./pages/OurProjects/page";
import ContactUs from "./pages/ContactUs/page";
import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import HomeIcons from "./HomeIcons/page";
import { QuickLinksProvider } from "./context/quickLinks";
import {NavProvider} from "./context/NavContext";
const Root = () => {
  return (
    <div> <NavProvider>
      <QuickLinksProvider>
       
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            <LoginPage />
            <HomeIcons />
            {/* <OurProjects /> */}
          </Suspense>
      
      </QuickLinksProvider>  </NavProvider>
    </div>
   
    //  <ContactUs />
  );
};

export default Root;
