import React, { Suspense } from "react";
import Home from "./Home/page";

import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import HomeIcons from "./HomeIcons/page";
import { QuickLinksProvider } from "./context/quickLinks";



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
           
             <LoginPage />
            
          </Suspense>
      
      </QuickLinksProvider>  
    </div>
   
    //  <ContactUs />
  );
};

export default Root;
