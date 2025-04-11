"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const data = {
  title: "Testimonials",
  subtitle: "Real reviews, real results",
};
const testimonialsData = [
  {
    name: "Mr. Justine John & Family",
    image: "/section2img/home1.jpg",
    famImg: "/family/justine-john.png",
    review:
      "Creo Homes has exceptionally performed to deliver my home with their strong experience, dedication and commitment to the fullest extent Creo Homes has exceptionally performed to deliver my home with their strong experience, dedication and commitment to the fullest extent Creo Homes has exceptionally performed to deliver my home with their strong experience, dedication and commitment to the fullest extent Creo Homes has exceptionally performed to deliver my home with their strong experience, dedication and commitment to the fullest extent",
  },
  {
    name: "Mr. Anish Raju & Family",
    image: "/section2img/home2.jpg",
    famImg: "/family/minsu-jose.png",
    review:
      "I'm truly grateful for the excellent service provided by Creo Homes. From start to finish, the process was smooth and hassle-free",
  },
  {
    name: "Mr. Alex Mathew & Family",
    image: "/section2img/home3.jpg",
    famImg: "/family/justine-john.png",
    review:
      "We are happy with the whole team of Creo Homes. Their approach and attention to detail were top-notch",
  },
  {
    name: "Mr. George Paul & Family",
    image: "/section2img/home4.jpg",
    famImg: "/family/minsu-jose.png",
    review:
      "Creo Homes made our dream home a reality. Their communication and quality work were excellent",
  },
  {
    name: "Mr. Rahul Menon & Family",
    image: "/section2img/home1.jpg",
    famImg: "/family/justine-john.png",
    review:
      "Highly professional team with a customer-first approach. Really satisfied with their service",
  },
  {
    name: "Mr. Arun Varghese & Family",
    image: "/section2img/home4.jpg",
    famImg: "/family/minsu-jose.png",
    review:
      "One of the best builders we have come across. Smooth and transparent process throughout",
  },
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const visibleTestimonials = [
    testimonialsData[startIndex],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
  ];

  return (
    <div
      className="w-full py-18 px-4 bg-gray-50"
      style={{ backgroundImage: "url('/img/grat.jpeg')" }}
    >
      <div className="flex flex-col items-center justify-center w-full ">
        <p className="text-4xl text-gray-700 mb-12">{data.title}</p>
        <p className="text-4xl mb-16">{data.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex gap-6">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white w-[50%]  p-8 rounded-xl shadow-md flex gap-4"
            >
              {/* Left Image */}
              <div className="w-1/2 h-[500px] relative ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl h-full object-cover w-full"
                />
                <div className="absolute bottom-0">
                  <img
                    src={item.famImg}
                    alt="image not available"
                    className="rounded-xl h-[250px] object-cover w-full "
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-1/2 h-[500px]  flex flex-col justify-center">
                <h3 className="font-semibold text-lg max-w-[70%] text-xl">
                  {item.name}
                </h3>

                <div className="flex text-yellow-500 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-600 text-lg mt-2 line-clamp-14 max-w-[80%]">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
