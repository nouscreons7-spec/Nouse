import React, { Suspense } from "react";
import Home from "./Home/page";
import Happenings from "./pages/content/Happenings/page";
import ContactUs from "./pages/content/ContactUs/page";
import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from "./login/page";
import HomeIcons from "./HomeIcons/page";

const Root = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      >
        <HomeIcons />
        <LoginPage />
      </Suspense>
    </div>
    // <Happenings />
    //  <ContactUs />
  );
};

export default Root;
