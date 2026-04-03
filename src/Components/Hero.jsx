import React from "react";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#eaf4fb]">
      {/* 🔵 HERO AREA */}
      <div className="relative">
        {/* Optional soft glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-transparent to-blue-200/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Life Insurance
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-gray-700">
              To Protect your Loved Ones
            </p>

            <button className="mt-6 bg-red-600 text-white px-7 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition flex items-center gap-2 shadow-lg">
              📞 Let’s Talk!
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/side.png"
              alt="family"
              className="w-[320px] md:w-[450px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ⚫ BOTTOM STRIP */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          {/* LEFT TEXT */}
          <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-700">
            <h3 className="font-bold text-lg">COMPARE & GET LOWEST QUOTES</h3>
            <p className="text-sm text-gray-300">FROM CANADA'S TOP INSURERS</p>
          </div>

          {/* RIGHT LOGOS */}
          <div className="flex items-center justify-between px-6 py-6">
            <button className="text-2xl opacity-70 hover:opacity-100">‹</button>

            <div className="flex items-center gap-8 text-gray-300 text-sm">
              <span className="font-semibold">IA Financial</span>
              <span className="font-semibold">Foresters</span>
              <span className="font-semibold">Desjardins</span>
            </div>

            <button className="text-2xl opacity-70 hover:opacity-100">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
