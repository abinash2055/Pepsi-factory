import React from "react";
import { BrandLogos } from "../data/Brand";
import { awardsData } from "../data/AwardsAchievements";
import { BoardofDirectorsKTM } from "../data/BoardOfDirectors";
import { BoardofDirectorsNWL } from "../data/BoardOfDirectors";

const Media = () => {
  const renderBoard = (boardData) =>
    boardData.map((member, index) => (
      <div key={index} className="flex flex-col items-center w-40">
        <img
          src={member.src}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition-transform"
        />
        <p className="mt-2 text-center font-medium">{member.name}</p>
        <p className="text-sm text-gray-500 text-center">
          {member.designation}
        </p>
      </div>
    ));

  return (
    <div className="p-6 space-y-12">
      {/* Brand Logos */}
      <section>
        <h1 className="text-2xl font-semibold text-center mb-6">Brand Logos</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {BrandLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center w-32">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-32 h-32 object-contain hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-center font-medium">{logo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      <section>
        <div className="p-6 space-y-12">
          {/* Kathmandu Board */}
          <section>
            <h1 className="text-2xl font-semibold text-center mb-6">
              Board of Directors - Kathmandu
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {renderBoard(BoardofDirectorsKTM)}
            </div>
          </section>

          {/* Nepalwala Board */}
          <section>
            <h1 className="text-2xl font-semibold text-center mb-6">
              Board of Directors - Nawalparasi
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {renderBoard(BoardofDirectorsNWL)}
            </div>
          </section>
        </div>
      </section>

      {/* Awards and Achievements */}
      <section>
        <h1 className="text-2xl font-semibold text-center mb-6">
          Awards & Achievements
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {awardsData.map((award, index) => (
            <div key={index} className="flex flex-col items-center w-40">
              <img
                src={award.image}
                alt={award.title}
                className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-center font-medium">{award.title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Highlight */}
      <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg shadow-sm max-w-6xl justify-center items-center mx-auto mb-4">
        <p className="text-gray-800 text-sm md:text-base">
          ⚠️ <strong>Note:</strong> Varun Beverages Nepal delivers fresh,
          high-quality beverages, backed by a strong brand, visionary
          leadership, and award-winning excellence.
        </p>
      </div>
    </div>
  );
};

export default Media;
