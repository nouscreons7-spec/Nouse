import Header from "@/app/Header/page";
import AnnounceContent from "@/app/AnounceContent/page";
import Footer from "@/app/Footer/page";
import BanenerComponent from "@/app/BannerComponent/page";
const Happenings = () => {
  const navItems = [
    { label: "Architecture", link: "/pages/content" },
    { label: "construction", link: "#construction" },
    { label: "Interior", link: "#interior" },
    { label: "Turnkey Projects", link: "#turnkey" },
  ];
  const data = {
    image: "/banner/shade1.jpg",
    title: "Happenings",
    subtitle:
      "Explore the latest milestones, awards, and exciting events that highlight our passion for exceptional design and innovation in the industry.",
    bgimage: "/img/bg-black.jpg",
    images: [
      "/banner/shade1.jpg",
      "/banner/shade2.jpg",
      "/banner/shade3.jpg",
      "/banner/shade1.jpg",
      "/banner/shade2.jpg",
      "/banner/shade3.jpg",
      "/banner/shade1.jpg",
      "/banner/shade2.jpg",
      "/banner/shade3.jpg",
    ],
  };
  return (
    <div>
      <Header
        navItems={navItems}
        contactNumber="+91 9645 899 951"
        quoteText="Get a quote"
      />

      <BanenerComponent data={data} />
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg border border-gray-800"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        {/* <AnnounceContent  backgroundImage ="/img/grat.jpeg" title="Let's collaborate on a project" buttonText="Give us a call now" buttonLink="/"  /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Happenings;
