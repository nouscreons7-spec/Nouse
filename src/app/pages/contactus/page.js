import BanenerComponent from "@/app/BannerComponent/page";
import ContactDetails from "@/app/ContactDetails/page";
import Footer from "@/app/Footer/page";

import Header from "@/app/Header/page";
import MapEmbed from "@/app/MapEmbded/page";

import { QuickLinksProvider } from "@/app/context/quickLinks";
const contactData = {
  officeAddress: "Kizhavana Road, Panampilly Nagar, Kochi",
  factoryAddress: "Kadungalloor, Valanjambalam Junction, Aluva",
  mail: "info@creohomes.in",
  phoneNumbers: ["+919645899951", "+919645899952", "+919645899953"],
  bgimage: "/section2img/home1.jpg",
  image: `/banner/shade3.jpg`,
  title: "Contact Us",
  subtitle: "We'd love to hear from you!",
};
const ContactUs = () => {
  return (
    <div>
      <QuickLinksProvider>
        <Header />
        <BanenerComponent data={contactData} />
        <div
          className="flex  lg:flex-row bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: `url(${contactData.bgimage})` }}
        >
          <div className=" bg-opacity-80 w-full flex justify-center items-center flex-col md:flex-row">
            <ContactDetails data={contactData} /> <MapEmbed />
          </div>
        </div>

        <Footer />
      </QuickLinksProvider>
    </div>
  );
};

export default ContactUs;
