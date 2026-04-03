import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* LEFT - LOGO + CONTACT */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            L.I.C <span className="text-black">Insurance</span>
          </h2>

          {/* Social Icons */}
          <div className="flex gap-3 mb-6">
            <div className="bg-blue-600 text-white p-2 rounded">
              <FaFacebookF />
            </div>
            <div className="bg-pink-500 text-white p-2 rounded">
              <FaInstagram />
            </div>
            <div className="bg-blue-700 text-white p-2 rounded">
              <FaLinkedinIn />
            </div>
            <div className="bg-red-600 text-white p-2 rounded">
              <FaYoutube />
            </div>
            <div className="bg-red-500 text-white p-2 rounded">
              <FaPinterest />
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-3">Contact Details</h3>
          <p className="text-sm text-gray-600 mb-3">
            Main Address : Canadian L.I.C Inc, 2969 Bovaird Dr East, Unit 2
            Brampton, ON L6S 0C6
          </p>

          <p className="text-sm text-gray-600">Toll Free : 1-844-552-4678</p>
          <p className="text-sm text-gray-600">Office : 416 543 9000</p>
          <p className="text-sm text-gray-600">E-mail : info@CanadianLIC.com</p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>Advisor Centre</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Webinar</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* GET INSURANCE */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get Insurance</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Insurance</li>
            <li>Term Life Insurance</li>
            <li>Whole Life Insurance</li>
            <li>Critical Illness Insurance</li>
            <li>Disability Insurance</li>
            <li>Mortgage Insurance</li>
            <li>Loan Protection</li>
            <li>Visitor Insurance</li>
            <li>Travel Insurance</li>
          </ul>

          {/* Hiring Box */}
          <div className="mt-6 border border-red-500 text-red-600 text-center py-3 rounded font-semibold">
            HIRING NEW OR LICENSED ADVISER
          </div>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Locations</h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p className="text-lg">Regina, SK - 2010 11th Avenue, 7th Floor</p>
            </div>

            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p className="text-lg">Winnipeg, MB - 330 St.Mary Avenue</p>
            </div>

            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p>Calgary, AB - 1925 18th Ave NE</p>
            </div>

            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p className="text-lg">Surrey, BC - 7404 King George Blvd</p>
            </div>

            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p className="text-lg">Brampton, ON - 2969 Bovaird Dr East</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-red-600 text-white text-center py-4 mt-12 text-sm">
        Copyright © 2022 CanadianLIC Insurance. All Rights Reserved.
      </div>
    </footer>
  );
}
