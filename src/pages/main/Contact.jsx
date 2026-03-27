import React from "react";
import { offices } from "../../data/Contact";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Submitted... (Demo only)");
  };
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We are here to help! Reach out to any of our offices for support,
            inquiries, or to schedule a visit.{" "}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Map */}
              <div className="h-64 w-full overflow-hidden">
                <iframe
                  src={office.map}
                  className="w-full h-full rounded-t-2xl border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={office.title + " Map"}
                ></iframe>
              </div>

              {/* Info */}
              <div className="p-8 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {office.title}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-600" />{" "}
                    {office.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhoneAlt className="text-green-500" /> {office.phone}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope className="text-red-500" /> {office.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Highlight */}
      <div className="mt-10 bg-blue-100 border-l-4 border-blue-500 p-5 rounded-lg shadow-sm max-w-6xl justify-center items-center mx-auto mb-4">
        <p className="text-gray-800 text-sm md:text-base">
          ⚠️ <strong>Note:</strong> Please use the provided contact details
          responsibly. Misuse or inappropriate communication may result in
          restricted access or further action.
        </p>
      </div>
    </>
  );
};

export default Contact;
