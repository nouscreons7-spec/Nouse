import Image from 'next/image';

const Message = ({backgroundImage,text}) => {
  // Dummy data
 
  return (
    <div
    className="relative flex min-h-screen bg-cover bg-center text-center bg-transparent"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {/* Overlay */}
   
    {/* Text Content */}
    <div className="relative max-w-xl px-10">
      <h1 className="text-white text-4xl font-bold  py-20">
        {text}
      </h1>
    </div>
  </div>
  
  );
};

export default Message;
