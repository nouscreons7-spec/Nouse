"use client";

import React, { useState } from "react";
import GetQuoteForm from "../GetFormQuote/page";

const HomeIcons = () => {
  const [showQuote, setShowQuote] = useState(false);

  const data = {
    number: 7308649064,
    whatsapp:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIdwJhbxfm9u60aSNr0OXAGMgWwpeqSjPCw&s",
    quote:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8qRtNAb5LmA_8eQfnGeceWQH9ngpgIHsCw&s",
  };

  return (
    <div className="relative">
      {/* Floating Circle Icons */}
      <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-3 z-50">
        {/* WhatsApp Icon */}
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

        {/* Quote Icon */}
        <button
          onClick={() => setShowQuote(true)}
          title="Get a Quote"
          className="focus:outline-none cursor-pointer "
        >
          <img
            src={data.quote}
            alt="Quote"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Form Modal */}
      {showQuote && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="relative">
            {/* ❌ Close Button */}
            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-6 right-6  cursor-pointer md:top-14 md:right-14 bg-white text-black  w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition"
              title="Close"
            >
              &times;
            </button>

            {/* The Form */}
            <GetQuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeIcons;
