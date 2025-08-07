"use client";



const HomeIcons = () => {
 

  const data = {
    number: 7308649064,
    whatsapp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIdwJhbxfm9u60aSNr0OXAGMgWwpeqSjPCw&s",
    quote:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsNsAmpM_j8lzmZAg9D23i6FYXkMUjkVRgk21ranHmYzi5MYK1kv-0DY&s",
  };

  return (
    <div className="relative">
      <div className="z-20 fixed bottom-5 right-3 flex flex-col items-end space-y-3 ">
        <a
          href={`https://wa.me/${data.number}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={data.whatsapp}
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href={`tel:${data.number}`}
          className="md:hidden"
        >
         <img
            src={data.quote}
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeIcons;
