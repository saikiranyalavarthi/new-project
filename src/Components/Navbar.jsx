import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 px-4 flex justify-between items-center">
        <p className="hidden md:block">
          Connect with our licensed Canadian insurance advisors
        </p>

        <div className="flex items-center gap-4">
          <span>📞 416 543 9000</span>
          <span className="hidden md:block">/ 1 844-552-4678</span>

          <button className="bg-white text-red-600 px-4 py-1 rounded-full font-medium text-sm hover:bg-gray-100">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-100 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-red-600 text-2xl font-bold">🍁</span>
          <h1 className="text-lg font-bold text-red-600">L.I.C. Insurance</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About Us</li>
          <li className="hover:text-red-600 cursor-pointer">Insurance</li>
          <li className="hover:text-red-600 cursor-pointer">Life Insurance</li>
          <li className="hover:text-red-600 cursor-pointer">Super Visa</li>
          <li className="hover:text-red-600 cursor-pointer">Business</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <p className="cursor-pointer hover:text-red-600">Home</p>
          <p className="cursor-pointer hover:text-red-600">About Us</p>
          <p className="cursor-pointer hover:text-red-600">Insurance</p>
          <p className="cursor-pointer hover:text-red-600">Life Insurance</p>
          <p className="cursor-pointer hover:text-red-600">Super Visa</p>
          <p className="cursor-pointer hover:text-red-600">Business</p>
          <p className="cursor-pointer hover:text-red-600">Contact</p>
        </div>
      )}
    </div>
  );
}
