import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/products" },
    { name: "Awards", path: "/awards-and-achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJbXmuJi9Gnu6rMl9XX5wbPgnAUOU_fVpg&s"
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
              />
            </Link>
            <span className="text-xl font-bold">Varun Beverage Nepal</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white transition-max-h duration-300 overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block w-full text-white hover:text-yellow-400 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
