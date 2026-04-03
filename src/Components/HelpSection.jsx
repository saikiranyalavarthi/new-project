import React from "react";

export default function HelpSection() {
  return (
    <section className="bg-[#e9ecef] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Need Help With The Policies?
          </h2>

          <p className="mt-5 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <span className="text-red-600 font-semibold">
              Call 416 543 9000
            </span>{" "}
            We are available 24x7 at your service
          </p>

          <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold transition shadow-md">
            SCHEDULE A CALL
          </button>
        </div>

        {/* RIGHT IMAGE (LAPTOP UI) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* SCREEN */}
            <div className="bg-black rounded-[14px] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <img
                src="/side4.jpg"
                alt="Video Call"
                className="w-[380px] md:w-[500px] rounded-[10px] object-cover"
              />
            </div>

            {/* CAMERA DOT */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>

            {/* BASE */}
            <div className="mt-[-6px] h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl w-[420px] md:w-[540px] mx-auto shadow-md"></div>

            {/* TRACKPAD EFFECT */}
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
