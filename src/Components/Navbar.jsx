import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Insurance",
    "Life Insurance",
    "SuperVisa Insurance",
    "Business Insurance",
    "Investment",
    "Contact",
    "Advisor Centre",

    "Webinar",
  ];

  return (
    <div className="w-full">
      {/* 🔴 Top Bar */}
      <div className="bg-red-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Left Text */}
          <p className="hidden md:block">
            Connect with our licensed Canadian insurance advisors
          </p>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 whitespace-nowrap">
              📞 <span>416 543 9000</span>
            </span>

            <span className="hidden md:block whitespace-nowrap">
              / 1-844-552-4678
            </span>

            <button className="bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>

      {/* ⚪ Navbar */}
      <nav className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          {/* Logo (fixed width for spacing) */}
          <div className="flex items-center gap-2 min-w-[240px]">
            <span className="text-red-600 text-2xl">🍁</span>
            <h1 className="text-xl font-bold text-red-600 tracking-wide whitespace-nowrap">
              L.I.C. INSURANCE
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700 ml-10">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="hover:text-red-600 cursor-pointer transition whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="ml-auto lg:hidden">
            <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-700 font-medium hover:text-red-600 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
