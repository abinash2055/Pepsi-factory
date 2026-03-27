import React, { useEffect, useState } from "react";
import { plantData } from "../../data/PlantData";
import {
  missionData,
  visionData,
  purposeData,
} from "../../data/missionVisionPurpose";
import { awardsData } from "../../data/AwardsAchievements";
import {
  BoardofDirectorsKTM,
  BoardofDirectorsNWL,
} from "../../data/BoardOfDirectors";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRoQxDHunBnYH3WG_0a6wnRDnfgXSK6EuwQA&s",
    "https://i.ytimg.com/vi/jjdhs9puTf0/sddefault.jpg",
    "https://www.sidel.com/media/es0cblu3/varun_beverage_top.jpg?v=1db9fe5051ff830",
    "https://images.bhaskarassets.com/web2images/521/2025/02/15/re-09_1739617740.jpg",
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 2000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, []);

  const renderNumberedCards = (data, color) =>
    data.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start"
      >
        {/* Number Badge */}
        <div className={`font-bold text-lg mb-2 ${color}`}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title / Point */}
        <h3 className="text-md md:text-lg text-gray-800 mb-2">{item}</h3>
      </div>
    ));

  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-16 px-4 md:px-16 space-y-16">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Delivering refreshing beverages with quality, innovation, and
            excellence across Nepal.
          </p>
        </div>
        {/* Plant Cards */}
        {plantData.map((plant, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center hover:-translate-y-2"
          >
            {/* Image */}
            <div
              className={`overflow-hidden rounded-2xl ${index % 2 !== 0 ? "order-1 md:order-2" : ""}`}
            >
              <img
                src={plant.image}
                alt={plant.title}
                className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Text */}
            <div
              className={`${index % 2 !== 0 ? "order-2 md:order-1" : ""} text-center flex flex-col items-center justify-center`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative inline-block">
                {plant.title}
                <span className="block w-16 h-1 bg-blue-600 mt-2 rounded-full"></span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {plant.description}
              </p>
            </div>
          </div>
        ))}

        {/* Add Video here */}
        <div className="w-full h-screen relative">
          {/* Full-screen YouTube Video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/bY_gRApfoJk?autoplay=1&mute=1&controls=1&loop=1&playlist=bY_gRApfoJk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Overlay container */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {/* Top text */}
            <div className="pt-8 text-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg uppercase">
                Sustainability to as <br /> a way as life
              </h1>
            </div>

            {/* Bottom text */}
            <div className="pb-8 text-center">
              <h2 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg mb-4">
                Refreshing Excellence Across Nepal
              </h2>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Purpose Section */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Mission */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Mission
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {renderNumberedCards(missionData, "text-blue-600")}
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Vision
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {renderNumberedCards(visionData, "text-green-600")}
            </div>
          </div>

          {/* Purpose */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Purpose
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {renderNumberedCards(purposeData, "text-yellow-600")}
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-screen relative overflow-hidden">
        {/* Images */}
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay Text Example */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="pt-10 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
              Products of Varun Beverages Nepal
            </h1>
          </div>
          <div className="pb-10 text-center">
            <h2 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">
              Refreshing Excellence Across Nepal
            </h2>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <section>
        <h1 className="text-2xl font-semibold text-center mb-6 mt-10">
          Our Team
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-16 mb-12">
          {/* Image Container */}
          <div className="w-full md:w-1/2 h-[375px] md:h-[430px] overflow-hidden rounded-xl">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQGVrnvj8TvQjg/feedshare-shrink_800/B4DZTpty6SGkAk-/0/1739087885291?e=2147483647&v=beta&t=OKZAKF6lYKa7LoQgCHFjPzvHeP6mRi4-PUbp6exrTRc"
              alt="Team Member"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Paragraph */}
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-base leading-relaxed text-justify">
              Our team is the driving force behind our success, bringing
              together a diverse group of passionate professionals committed to
              excellence, innovation, and continuous growth. With a strong
              foundation of experience and expertise across various domains, we
              work collaboratively to deliver high-quality products and services
              that meet the evolving needs of our customers. Each member of our
              team plays a vital role in ensuring operational efficiency,
              maintaining the highest standards of quality, and fostering a
              culture of accountability and trust. We believe in empowering our
              people by encouraging creativity, supporting professional
              development, and promoting a positive and inclusive work
              environment. Our team is dedicated not only to achieving business
              goals but also to building meaningful relationships with
              customers, partners, and communities. Through teamwork, integrity,
              and a shared vision for the future, we strive to create lasting
              value and make a meaningful impact in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors off Kathmandu */}
      <section className="py-6 px-4 md:px-16 bg-gray-100 space-y-16">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-6 mt-10">
            Board of Directors of Kathmandu
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {BoardofDirectorsKTM.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors off Nawalparasi */}
      <section className="py-14 px-4 md:px-16 bg-gray-100 space-y-16">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-6">
            Board of Directors of Nawalparasi
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {BoardofDirectorsNWL.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-blue-600 text-sm mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards  */}
      <section>
        <h1 className="text-2xl font-semibold text-center mb-6 mt-10 py-6">
          Awards & Achievements
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
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
          ⚠️ <strong>Note:</strong> We are committed to delivering beverages of
          the highest quality, ensuring consistency and freshness, continuously
          innovate with new flavors, packaging, and operational improvements to
          delight our customers and stay ahead in the market.Also prioritize
          sustainability and eco-friendly practices, minimizing environmental
          impact while promoting responsible growth.
        </p>
      </div>
    </>
  );
};

export default About;
