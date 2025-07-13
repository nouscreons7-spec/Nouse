"use client";
import { useState } from "react";

const GetQuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      countryCode: formData.get("countryCode"),
      number: formData.get("number"),
      location: formData.get("location"),
      area: formData.get("area"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error("Email send error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8">
      <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-4 md:p-6">
        {!submitted ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Get Your Quote
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <div className="col-span-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    className="border border-gray-300 p-2 rounded-md w-1/4 focus:outline-none"
                    defaultValue="+91"
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">US (+1)</option>
                  </select>
                  <input
                    type="text"
                    name="number"
                    placeholder="Your number"
                    className="w-3/4 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="col-span-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Plot Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location of your plot"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Approximate Area
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="Approximate area"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={3}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 rounded-md shadow-md"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 flex items-center space-x-4 shadow-md">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-inner">
                <img
                  src="/check-icon.png"
                  alt="Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold text-base md:text-lg">
                Thank you! Your quote has been successfully submitted.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuoteForm;
