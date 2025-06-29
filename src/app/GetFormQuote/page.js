"use client";
import { useState,useEffect } from "react";

const GetQuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setSubmitted(false);
  }, []);

  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-10">
      <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get Your Quote</h2>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xpwrkkdw"
            
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  className="border border-gray-300 p-3 rounded-lg w-1/3 focus:outline-none"
                  defaultValue="+91"
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">US (+1)</option>
                </select>
                <input
                  type="text"
                  name="number"
                  placeholder="Your number"
                  className="w-2/3 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Plot Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location of your plot"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Approximate Area</label>
              <input
                type="text"
                name="area"
                placeholder="Approximate area you're looking for"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
              />
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="text-green-600 font-semibold text-lg">
            ✅ Thank you! Your quote has been submitted.
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuoteForm;
