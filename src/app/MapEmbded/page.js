const MapEmbed = () => {
    return (
      <div className="h-[500px] md:h-[600px] flex justify-center items-center w-full  p-5 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3221635257496!2d76.29693017481298!3d9.96636227333355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4821907c1b%3A0x3e52906f8794895e!2sCreo%20Homes!5e0!3m2!1sen!2sin!4v1719054973624!5m2!1sen!2sin"
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
  