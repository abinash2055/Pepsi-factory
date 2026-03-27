import React from "react";
import { awardsData } from "../data/AwardsAchievements";

const Awards = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Awards & Achievements
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Celebrating the milestones, recognitions, and achievements of our
              factory.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl p-6 relative transform transition-all duration-300 hover:shadow-4xl hover:scale-105 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-32 h-32 object-cover rounded-full shadow-md mx-auto"
                />

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base text-center leading-relaxed">
                  {award.description}
                </p>

                {/* Optional badge / year (if needed) */}
                {award.year && (
                  <div className="absolute -top-5 right-5 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {award.year}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Highlight Note */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-xl shadow-md">
            <p className="text-gray-800 text-sm md:text-base">
              🌟 <strong>Note:</strong> These awards represent our excellence
              and commitment to quality over the years.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
