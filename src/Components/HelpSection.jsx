import React from "react";

export default function HelpSection() {
  return (
    <section className="bg-[#e9ecef] py-8 md:py-8 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Need Help With The Policies?
          </h2>

          <p className="mt-4 md:mt-5 text-lg md:text-2xl text-gray-700 leading-relaxed">
            <span className="text-red-600 font-semibold">
              Call 416 543 9000
            </span>{" "}
            We are available 24x7 at your service
          </p>

          <button className="mt-8 md:mt-10 bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-3 rounded-full font-semibold transition shadow-md">
            SCHEDULE A CALL
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-full max-w-[320px] md:max-w-[520px]">
            {/* SCREEN */}
            <div className="bg-black rounded-xl p-2 shadow-xl">
              <img
                src="/side4.jpg"
                alt="Video Call"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>

            {/* CAMERA DOT */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>

            {/* BASE */}
            <div className="h-3 md:h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl w-[90%] mx-auto shadow-md"></div>

            {/* TRACKPAD */}
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
