import React from "react";
import { Headphones, ShieldCheck, Settings, Award } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f3f3] py-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-500 text-sm mb-3">Why People Choose Us?</p>

          <h2 className="text-4xl md:text-6xl font-bold leading-snug text-gray-900">
            We're here for the bad times. The good ones, too.
          </h2>

          <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            LEARN MORE
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* ITEM 1 */}
          <div className=" p-6 rounded-lg ">
            <Headphones className="mb-3 text-gray-800" size={28} />
            <h3 className="font-semibold text-gray-900">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porta fringilla ullamcorper felis
            </p>
          </div>

          {/* ITEM 2 */}
          <div className=" p-6 rounded-lg ">
            <ShieldCheck className="mb-3 text-gray-800" size={28} />
            <h3 className="font-semibold text-gray-900">Constant Protection</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porta fringilla ullamcorper felis
            </p>
          </div>

          {/* ITEM 3 */}
          <div className=" p-6 rounded-lg ">
            <Settings className="mb-3 text-gray-800" size={28} />
            <h3 className="font-semibold text-gray-900">
              Uninterrupted Service
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porta fringilla ullamcorper felis
            </p>
          </div>

          {/* ITEM 4 */}
          <div className=" p-6 rounded-lg ">
            <Award className="mb-3 text-gray-800" size={28} />
            <h3 className="font-semibold text-gray-900">Trusted Since 2001</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porta fringilla ullamcorper felis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
