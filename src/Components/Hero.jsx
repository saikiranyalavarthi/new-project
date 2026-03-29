import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
      {/* Background Image (optimized) */}
      <img
        src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&q=70"
        alt="family"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (removed blur for performance) */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Life Insurance
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-700">
            To Protect your Loved Ones
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition">
            📞 Let’s Talk!
          </button>
        </div>

        {/* Right Image (optimized) */}
        <div className="hidden md:flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&q=70"
            alt="family"
            loading="lazy"
            className="w-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
