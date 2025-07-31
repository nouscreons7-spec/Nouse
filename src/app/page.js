import React, { Suspense } from "react";
import Home from "./Home/page";
import OurProjects from "./pages/ourprojects/page";
import ContactUs from "./pages/contactus/page";
import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import HomeIcons from "./HomeIcons/page";
import { QuickLinksProvider } from "./context/quickLinks";
import AboutUs from "./pages/aboutus/page";
import Careers from "./pages/careers/page";
import Terms from "./pages/terms/page";
import Privacy from "./pages/privacy/page";


const Root = () => {
  return (
    <div> 
      <QuickLinksProvider>
       
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            <Careers />
            {/* <LoginPage />
            <HomeIcons /> */}
            {/* <ContactUs /> */}
          </Suspense>
      
      </QuickLinksProvider>  
    </div>
   
    //  <ContactUs />
  );
};

export default Root;
