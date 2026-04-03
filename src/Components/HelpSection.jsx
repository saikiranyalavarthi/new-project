import React from "react";

export default function HelpSection() {
  return (
    <section className="bg-[#e9ecef] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Need Help With The Policies?
          </h2>

          <p className="mt-4 text-2xl text-gray-700 leading-relaxed">
            <span className="text-red-600 font-semibold">
              Call 416 543 9000
            </span>{" "}
            We are available 24x7 at your service
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition">
            SCHEDULE A CALL
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          {/* LAPTOP FRAME */}
          <div className="relative">
            {/* Laptop Body */}
            <div className="bg-black rounded-lg p-2 shadow-xl">
              <img
                src="/side4.jpg"
                alt="Video Call"
                className="w-[380px] md:w-[480px] rounded-md"
              />
            </div>

            {/* Bottom Base */}
            <div className="h-3 bg-gray-300 rounded-b-xl w-[420px] md:w-[520px] mx-auto"></div>

            {/* Call Icon */}
          </div>
        </div>
      </div>
    </section>
  );
}
