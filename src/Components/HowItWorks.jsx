import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-500 mb-2">Why Choose Us</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            How it works on{" "}
            <span className="text-red-600">CanadianLIC.com</span>
          </h2>

          {/* Step 1 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rotate-45">
              <span className="-rotate-45">01</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Compare</h3>
              <p className="text-gray-600 text-sm mt-2">
                Compare insurance plans easily and choose the best option for
                you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rotate-45">
              <span className="-rotate-45">02</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Apply</h3>
              <p className="text-gray-600 text-sm mt-2">
                Fill in your details and apply for the selected insurance plan.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rotate-45">
              <span className="-rotate-45">03</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Close</h3>
              <p className="text-gray-600 text-sm mt-2">
                Finalize and secure your insurance policy quickly and easily.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            GET STARTED
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80"
            alt="mobile UI"
            className="w-[260px] md:w-[320px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
