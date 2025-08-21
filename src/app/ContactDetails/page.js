import { useSiteSettings } from "@/app/context/SiteSettingsContext";

const ContactDetails = ({ data }) => {
  if (!data) return null;
  const { settings } = useSiteSettings() || {};
  return (
    
    <div
      className="w-full p-6 lg:p-10"
      style={{
        fontFamily: settings?.fontFamily,
        
      }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-6 md:p-10  space-y-8"
      >
        <div>
          <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            {data.headings?.office || "Our Address"}
          </h5>
          <p className="text-lg font-medium">{data.officeAddress}</p>
        </div>

        <div className="border-t border-gray-300" />

        <div>
          <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            {data.headings?.factory || "Factory Address"}
          </h5>
          <p className="text-lg font-medium">{data.factoryAddress}</p>
        </div>

        <div className="border-t border-gray-300" />

        <div>
          <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            {data.headings?.mailbox || "Our Mailbox"}
          </h5>
          <p className="text-lg font-medium">{data.mail}</p>
        </div>

        <div className="border-t border-gray-300" />

        <div>
          <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            {data.headings?.phone || "Our Phone"}
          </h5>
          <div className="flex flex-wrap gap-4 mt-2">
            {data.phoneNumbers.map((phone, i) => (
              <p key={i} className="text-lg font-medium">
                {phone},
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
