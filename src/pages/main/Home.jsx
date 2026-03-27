import React from "react";
import { Link } from "react-router-dom";
import { BrandLogos } from "../../data/Brand";

const Home = () => {
  return (
    <>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero bg-gray-100 flex flex-col md:flex-row items-center p-6 md:p-16">
          <div className="hero-text md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Varun Beverages Nepal
            </h1>
            <p className="mb-6 text-gray-700">
              Delivering beverages of the highest quality, ensuring freshness,
              innovation, and consistency in every product.
            </p>
            <Link
              to="/about"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
            >
              Learn More
            </Link>
          </div>
          <div className="hero-image md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQE6nUap9Dznug/feedshare-shrink_800/feedshare-shrink_800/0/1694342566690?e=2147483647&v=beta&t=ohOYN_blVNH_THdG9EAG2bcmo_ybVAH37yxkltoBPOo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h1 className="text-2xl font-semibold text-center mb-6">
            Brand Logos
          </h1>
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

        {/* About Snippet */}
        <section className="about-snippet bg-gray-50 p-6 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            At Varun Beverages Nepal, we continuously innovate with new flavors,
            packaging, and operational improvements to delight our customers.
            Our commitment to quality and freshness drives everything we do.
          </p>
          <Link
            to="/about"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
          >
            Read More
          </Link>
        </section>

        {/* Call to Action */}
        <section className="cta bg-green-500 text-white p-6 md:p-16 text-center rounded-lg mx-6 md:mx-16 my-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Visit our offices or reach out via email to explore our products and
            services.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-500 font-semibold py-2 px-6 rounded hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
