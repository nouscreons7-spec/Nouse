import BanenerComponent from "@/app/BannerComponent/page";
import ContactDetails from "@/app/ContactDetails/page";
import Footer from "@/app/Footer/page";
import GetQuoteForm from "@/app/GetFormQuote/page";
import Header from "@/app/Header/page";
import MapEmbed from "@/app/MapEmbded/page";

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
   <Header
       
      />
      <BanenerComponent data={contactData} />
      <div
        className="flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactData.bgimage})` }}
      >
        <div className="bg-white bg-opacity-80 w-full flex flex-col lg:flex-row">
          <ContactDetails data={contactData} />
          <GetQuoteForm />
        </div>
      </div>
      <MapEmbed />
      <Footer />
    </div>
  );
};

export default ContactUs;
