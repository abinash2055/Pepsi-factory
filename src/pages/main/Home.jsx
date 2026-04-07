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
  const [showPopup, setShowPopup] = useState(true);
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

  // 🔹 Popup auto-hide after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔹 PopUp at Center */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4">
          <div
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col"
            style={{
              width: "95vw",       // almost full screen width
              maxWidth: "1400px",  // limit width for very large screens
              height: "95vh",      // almost full screen height
            }}
          >
            {/* Content container */}
            <div className="overflow-hidden">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
                Welcome to Our Varun Beverages Nepal!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Kathmandu — Most of the popular brands of cold drinks available in the Nepali market are Pepsi, Mountain Dew, Mirinda, 7 Up, Sting (Energy Drinks) etc. The mentioned beverages are also known as carbonated soft drinks. On the other hand, 'Slice' in juice and 'Aquafina' in mineral water are also popular brands in Nepal.
                <br />
                All these products are under the Pepsi brand. The company producing and distributing them is Varun Beverages located in the old Sinamangal of Kathmandu, i.e. Pepsicola. Varun Beverages is a multinational company that has built its empire on 50 acres of land since 2055. Similarly, Varun Beverages is also doing its production and distribution work on 15 bigha land in Ramgram of Nawalparasi district.
                <br />
                Varun Beverages is the official bottler of Soft Drinks Pepsi in Nepal which is expanding its market without compromising on quality products. Keeping in view the market demand and the taste of the customer's choice, this company has been promoting its new products and has succeeded in occupying the Nepali market share of carbonated drinks above 40 percent and has also received the A+ rating from a prestigious organization like ICRA Nepal.
                <br />
                According to the demand of the market, Varun Beverages is emphasizing on market expansion by delivering its products to all parts of the country. Today, the company has an annual turnover of around 12 billion Nepali rupees. Varun Beverages is not only a multinational company but also a 'high tax payer' company of Nepal. Which has paid taxes of 4 to 5 billion rupees to the government of Nepal. It is also giving invaluable contribution to the country by employing thousands directly and tens of thousands indirectly.
                <br />
                Varun Beverages, which occupies a large market share especially in the neighboring country India, is also leading in Nepal, Sri Lanka, Zimbabwe, Morocco, South Africa, Congo and Kenya. Listed on the Indian stock exchanges NSE and VSE, Varun Beverages has more than 38 manufacturing plants in India alone.
                <br />
                Compared to other soft drinks products, this multinational company has been emphasizing on quality products & has been doing business of more than 16 trillion rupees annually in 8 different countries.
                <br />
                This company, being aware of the health of the customers, uses only sugar approved by Pepsi, and also installs international quality measuring machines and sends quality products to the market with high-quality 'bottling'. Thus establishing the company's products as world class brands.
                <br />
                On the other hand, while there is a debate that the consumption of sugar should be reduced in the world, the company is reducing the amount of sugar in its products as well as moving towards the concept of 'low sugar to zero sugar'. And the company has been doing remarkable work in various fields under social responsibility, not only looking at its commercial interests.
              </p>
            </div>

            {/* Close Button */}
            <div className="mt-4 flex justify-center">
              <button
                className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm sm:text-base md:text-lg"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-white/50"
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