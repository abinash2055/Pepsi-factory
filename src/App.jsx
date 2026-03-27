import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Importing from Main Page
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Product from "./pages/main/Product";
import Contact from "./pages/main/Contact";

// Importing from Policies Pages
import Disclaimer from "./pages/policies/Disclaimer";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsCondition from "./pages/policies/TermsConditions";
import Footer from "./components/Footer";

// Importing Story Pages
import Media from "./pages/Media";
import Journey from "./pages/Journey";
import Awards from "./pages/Awards";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 pt-20">
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />

          {/* Policy Pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />

          {/* Policy Pages */}
          <Route path="/media" element={<Media />} />
          <Route path="/awards-and-achievements" element={<Awards />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
