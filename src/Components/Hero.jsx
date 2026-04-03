import React from "react";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#eaf4fb]">
      {/* 🔵 HERO AREA */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-transparent to-blue-200/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight">
              Life Insurance
            </h1>

            <p className="mt-3 md:mt-4 text-base md:text-2xl text-gray-700">
              To Protect your Loved Ones
            </p>

            <button className="mt-5 md:mt-6 bg-red-600 text-white px-6 md:px-7 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-red-700 transition shadow-lg">
              📞 Let’s Talk!
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/side.png"
              alt="family"
              className="w-[260px] sm:w-[300px] md:w-[450px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ⚫ BOTTOM STRIP */}
      <div className="bg-[#3a3a3a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div className="px-4 md:px-6 py-5 border-b md:border-b-0 md:border-r border-gray-600 text-center md:text-left">
            <h3 className="font-bold text-sm md:text-lg">
              COMPARE & GET LOWEST QUOTES
            </h3>
            <p className="text-xs md:text-sm text-gray-300">
              FROM CANADA'S TOP INSURERS
            </p>
          </div>

          {/* RIGHT LOGOS */}
          <div className="flex items-center justify-between px-4 md:px-6 py-5 gap-4">
            <button className="text-xl md:text-2xl opacity-70 hover:opacity-100">
              ‹
            </button>

            <img
              src="/side2.jpg"
              alt="logos"
              className="h-8 md:h-14 object-contain"
            />

            <button className="text-xl md:text-2xl opacity-70 hover:opacity-100">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
