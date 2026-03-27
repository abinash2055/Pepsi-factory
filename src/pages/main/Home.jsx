import React, { useEffect, useRef, useState } from "react";
import { banner } from "../../data/Banner";
import { Link } from "react-router-dom";
import nepalMap from "../../assets/map.png";
import { statsData } from "../../data/Home";
import { images } from "../../data/Images";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sliderRef = useRef(null);

  // 🔥 Banner auto-slide (step)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === banner.length - 1 ? 0 : prev + 1));
    }, 3000); // slide every 3 sec

    return () => clearInterval(interval);
  }, [isHovering]);

  // 🔥 Smooth continuous scroll (optional)
  useEffect(() => {
    let animationFrame;

    const scroll = () => {
      if (!sliderRef.current || isHovering) return;
      sliderRef.current.scrollLeft += 0.3;

      if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
        sliderRef.current.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banner.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banner.length - 1 : prev - 1));
  };

  // 🔥 Stats counters animation
  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const intervalTime = duration / steps;

    const intervals = statsData.map((stat, i) => {
      let step = 0;
      const increment = stat.value / steps;

      return setInterval(() => {
        step++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(Math.floor(increment * step), stat.value);
          return updated;
        });
        if (step >= steps) clearInterval(intervals[i]);
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      {/* 🔹 Banner */}
      <div
        className="w-full h-screen overflow-hidden relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={sliderRef}
          className="flex h-full overflow-x-hidden scroll-smooth"
          style={{ width: "200%" }}
        >
          {[...banner, ...banner].map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="w-screen h-full object-cover flex-shrink-0"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.7s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/70"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {banner.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Refresh Your World
          </h1>
          <p className="mb-6 max-w-xl text-2xl md:text-3xl font-semibold">
            Experience the best beverages with freshness and innovation.
          </p>
          <Link to="/about">
            <button className="bg-violet-500 px-6 py-2 rounded hover:bg-green-600 text-lg md:text-xl mt-4">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 Stats Row */}
      <div className="flex justify-center gap-6 overflow-x-auto py-10 px-4">
        {statsData.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-4 min-w-[150px] bg-white rounded-lg shadow-md flex-shrink-0"
            >
              <IconComponent className="w-12 h-12 text-purple-500" />
              <span className="text-3xl md:text-5xl font-bold">
                {counts[i].toLocaleString()}
                {stat.suffix}
              </span>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* 🔹 Nepal Footprint */}
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              NEPAL FOOTPRINT
            </h1>
            <p className="text-gray-700 mb-6">
              Varun Beverages Nepal operates key manufacturing and distribution
              facilities to ensure quality beverage supply across the country.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="text-red-500 text-3xl">📍</div>
                <div>
                  <h2 className="text-xl font-bold text-blue-900">
                    Pepsicola, Kathmandu
                  </h2>
                  <p className="text-gray-600">Corporate Office & Main Facility</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-green-600 text-3xl">🏭</div>
                <div>
                  <h2 className="text-xl font-bold text-blue-900">Nawalparasi</h2>
                  <p className="text-gray-600">
                    Manufacturing & Distribution Plant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-yellow-500 text-3xl">🚚</div>
                <div>
                  <h2 className="text-xl font-bold text-blue-900">
                    Nationwide Supply
                  </h2>
                  <p className="text-gray-600">Delivering beverages across Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img
              src={nepalMap}
              alt="Nepal Map"
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>
      </div>

              {/* Add Video here */}
      <div className="w-full h-screen relative">
  {/* Full-screen YouTube Video */}
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/lZw5NtNez9I?autoplay=1&mute=1&loop=1&playlist=lZw5NtNez9I&controls=0&modestbranding=1&rel=0"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>

  {/* Overlay container */}
  <div className="absolute inset-0 flex flex-col justify-between">
    {/* Top text */}
    <div className="pt-8 text-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg uppercase">
        Exploring Our Factory
      </h1>
    </div>

    {/* Bottom text */}
    <div className="pb-8 text-center">
      <h2 className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg mb-4">
        Knowing Manufacturing Details Across Nepal
      </h2>
    </div>
  </div>
</div>

      {/* Images */}
<div className="max-w-7xl mx-auto px-4 md:px-16 py-10">
  {/* Title and Paragraph */}
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Our Gallery
    </h2>
    <p className="text-gray-600 text-lg md:text-xl">
      Explore some of our finest products and moments captured in images.
    </p>
  </div>

  {/* Image Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          src={img.src}
          alt={img.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center font-bold text-lg md:text-xl px-2">
            {img.label}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Home;