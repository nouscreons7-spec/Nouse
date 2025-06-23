"use client";
import { useState } from "react";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    number: "",
    email: "",
    location: "",
    area: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sendQuoteMail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-10">
      <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get Your Quote</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                className="border border-gray-300 p-3 rounded-lg w-1/3 focus:outline-none"
                onChange={handleChange}
              >
                <option value="+91">India (+91)</option>
                <option value="+1">US (+1)</option>
                {/* Add more countries if needed */}
              </select>
              <input
                name="number"
                placeholder="Your number"
                className="w-2/3 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              name="email"
              placeholder="Your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Plot Location</label>
            <input
              name="location"
              placeholder="Location of your plot"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Approximate Area</label>
            <input
              name="area"
              placeholder="Approximate area you're looking for"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
              onChange={handleChange}
            />
          </div>

          {/* reCAPTCHA or similar can be added here */}

          <div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteForm;
