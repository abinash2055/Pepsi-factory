import React from "react";
import { timelineItems } from "../data/JourneyTimeline";

const Journey = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Factory Journey
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              A timeline of milestones that shaped the growth of our factory.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:bg-gray-300">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0; // alternate sides
              return (
                <div
                  key={index}
                  className={`mb-16 flex flex-col md:flex-row items-center md:justify-${isLeft ? "start" : "end"} relative`}
                >
                  {/* Spacer for central line */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Timeline Card */}
                  <div className="bg-white rounded-3xl shadow-2xl p-6 md:max-w-md relative hover:shadow-3xl transition-all duration-300">
                    {/* Year Badge */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.year}
                    </div>

                    {/* Event */}
                    <p className="mt-8 text-gray-700 text-base md:text-lg text-center md:text-left leading-relaxed">
                      {item.event}
                    </p>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>

          {/* Highlight Note */}
          <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg shadow-sm">
            <p className="text-gray-800 text-sm md:text-base">
              ⚠️ <strong>Note:</strong> These milestones represent key moments
              in our factory’s journey and growth over the years.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
