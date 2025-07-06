import React, { Suspense } from 'react';
import Home from "./Home/page";
import Happenings from "./pages/content/Happenings/page";
import ContactUs from "./pages/content/ContactUs/page";
import LoadingSpinner from "./LoadingSpinner/page";
import LoginPage from './login/page';

const Root = () => {


  return (
    <div>
    <Suspense fallback={<div><LoadingSpinner /></div>}>
    <LoginPage /></Suspense></div>
  // <Happenings />
  //  <ContactUs />
  );
};

export default Root;
