import React from "react";
import Header from "./Header/page";
import Banner from "./HomeBanner/page";
import Firstsection from "./FirstSection/page";


const Home = () => {
  const navItems = [
    { label: "Architecture", link: "#architecture" },
    { label: "Construction", link: "#construction" },
    { label: "Interior", link: "#interior" },
    { label: "Turnkey Projects", link: "#turnkey" },
  ];

  const bannerImages = [
    "/banner/shade1.jpg",
    "/banner/shade2.jpg",
    "/banner/shade3.jpg",
  ];

  return (
    <div>
      <Header navItems={navItems} contactNumber="+91 9645 899 951" quoteText="Get a quote" />
      <Banner images={bannerImages} interval={4000} />
      <Firstsection />
     
    </div>
  );
};

export default Home;
