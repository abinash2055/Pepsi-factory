import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [showCareerPopup, setShowCareerPopup] = useState(false);

  return (
    <footer className="bg-gray-800 text-white  w-full">
      {/* Full width container with responsive padding */}
      <div className="w-full px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Top Section: Columns */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4 md:max-w-xs">
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJbXmuJi9Gnu6rMl9XX5wbPgnAUOU_fVpg&s"
                  alt="Logo"
                  className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white shadow-md"
                />
              </Link>

              <span className="text-lg md:text-xl font-bold text-white">
                Varun Beverage Nepal
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Varun Beverage Nepal is committed to delivering high-quality
              beverages with a focus on excellence, sustainability, and customer
              satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm md:text-base">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Policies</h3>
            <ul className="space-y-1 text-gray-300 text-sm md:text-base">
              <li>
                <Link
                  to="/privacy-and-policy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowCareerPopup(true)}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  Career
                </button>
              </li>
            </ul>
          </div>

          {/* Other  Story*/}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Our Story</h3>
            <ul className="space-y-1 text-gray-300 text-sm md:text-base">
              <li>
                <Link
                  to="/media"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  to="/journey"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/awards-and-achievements"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Awards and Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-300 text-sm md:text-base">
              📍 Kathmandu, Nepal
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              📞 +977-1-4990066 | +977-1-6630909
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              ✉️ <a
                href="mailto:info@varunbeverage.com"
                className="hover:text-yellow-400 transition-colors"
              >
                info@varunbeverage.com
              </a>
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-4">
              <a
                href="https://www.facebook.com/NepalPepsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/varunbeverageslimited"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@varunbeverageslimited"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Extra Address Column */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Our Office</h3>
            <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors">
              🏭 Pepsicola, Kathmandu
            </p>
            <p className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors">
              🏭 Nawalpur, Nawalparasi
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-center gap-2  text-sm">
          <span>
            &copy; {new Date().getFullYear()} Varun Beverage Nepal. All rights
            reserved.
          </span>
        </div>
      </div>

      {/* Career Popup */}
      {showCareerPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md md:max-w-lg p-6 md:p-8 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowCareerPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              Career Opportunities
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              We at <strong>Varun Beverage Nepal</strong> are always looking for
              talented, motivated individuals to join our team.
            </p>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              You are welcome to visit our office at{" "}
              <strong>Kathmandu, Nepal</strong> or{" "}
              <strong>Nawalparasi, Nepal</strong> to learn more about
              opportunities, or send your CV and cover letter via email to{" "}
              <a
                href="mailto:info@varunbeverage.com"
                className="text-blue-500 underline"
              >
                pcnpl@mail.com.np
              </a>
              .
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              We look forward to meeting you and exploring how you can grow with
              us!
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
