const MapEmbed = ({image}) => {
    return (
      <div className="h-[500px] md:h-[600px] flex justify-center items-center w-full  p-5 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={image}
          width="98%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;
  