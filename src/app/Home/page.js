import React from "react";
import Header from "../Header/page";
import Banner from "../HomeBanner/page";
import CompletedProjects from "../FirstSection/page";
import ProjectSection from "../ProjectSection/page";
import AnnounceContent from "../AnounceContent/page";
import Footer from "../Footer/page";
import Message from "../Message/page";
import WhyNous from "../whyNous/page";
import FeatureSection from "../FeatureSection/page";
import TestimonialSection from "../TestimonialSection/page";
import EnsureSection from "../EnsureSection/page";
import Advertisement from "../advertisement/page";
import Content from "../pages/content/page";


const Home = () => {

  const heroData = {
    backgroundImage: "/banner/shade3.jpg",
    text: "A space to recharge life's batteries."
  };
  const story = {
    backgroundImage: "/banner/shade1.jpg",
    text: "Your space your story."
  };

  return (
    <div>
      <Header  />
      <Banner />
      <CompletedProjects />
      <ProjectSection />
      {/* <AnnounceContent  backgroundImage ="/img/grat.jpeg" title="Have a project in mind?" buttonText="talk to us today"  /> */}
      {/* <Message backgroundImage={heroData.backgroundImage} text={heroData.text}/> */}
      <WhyNous />
      <FeatureSection />
      {/* <Message backgroundImage={story.backgroundImage} text={story.text}/>  */}
      <TestimonialSection />
      <EnsureSection />
      <Advertisement />
      {/* <AnnounceContent  backgroundImage ="/img/grat.jpeg" title="Let's collaborate on a project" buttonText="Give us a call now" buttonLink="/"  /> */}

     <Footer />
     {/* <Content /> */}
    </div>
  );
};

export default Home;
