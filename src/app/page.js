import React from "react";
import Header from "./Header/page";
import Banner from "./HomeBanner/page";
import Firstsection from "./FirstSection/page";
import ThirdSection from "./ThirdSection/page";
import AnnounceContent from "./AnounceContent/page";
import Footer from "./Footer/page";
import Message from "./Message/page";


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
      <ThirdSection />
      <AnnounceContent  backgroundImage ="/img/grat.jpeg" title="Have a project in mind?" buttonText="talk to us today" buttonLink="/"  />
      <Message />
     <Footer />
    </div>
  );
};

export default Home;
