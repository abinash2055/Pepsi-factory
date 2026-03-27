import React from "react";
import { PrivacyPolicy as privacyData } from "../../data/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen pt-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Please read this Privacy Policy carefully to understand how{" "}
            <span className="font-semibold text-gray-800">
              Varun Beverage Nepal
            </span>{" "}
            collects, uses, and protects your information.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {privacyData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="text-yellow-500 font-bold text-lg mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-10 bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-lg shadow-sm mb-5">
          <p className="text-gray-800 text-sm md:text-base">
            ⚠️ <strong>Note:</strong> We take your privacy seriously. Please
            review this policy carefully. Any use of our services implies
            acceptance of these terms regarding data collection and usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
