import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-500 text-sm mb-3 tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            How it works on{" "}
            <span className="text-red-600">CanadianLIC.com</span>
          </h2>

          {/* STEPS */}
          {[
            { no: "01", title: "Compare" },
            { no: "02", title: "Apply" },
            { no: "03", title: "Close" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 mt-10">
              {/* DIAMOND */}
              <div className="w-14 h-14 bg-gray-800 text-white flex items-center justify-center rotate-45 shadow-md">
                <span className="-rotate-45 font-semibold text-lg">
                  {item.no}
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-1 leading-relaxed max-w-md">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
Travel Shield Canada Insurance Plan
                </p>
              </div>
            </div>
          ))}

          {/* BUTTON */}
          <button className="mt-12 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold transition shadow-md">
            GET STARTED
          </button>
        </div>

        {/* RIGHT SIDE MOBILE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* PHONE */}
            <div className="bg-black rounded-[45px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[300px] h-[630px] relative">
              {/* NOTCH */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10"></div>

              {/* SCREEN */}
              <div className="bg-white rounded-[35px] p-5 h-full overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Compare rates</h3>

                <p className="text-sm text-gray-600 mb-5">
                  Lorem ipsum dolor sit amet, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
Travel Shield Canada Insurance Plan
                </p>

                {/* CARD 1 */}
                <div className="border rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition">
                  <img
                    src="/side5.jpg"
                    alt="Travel Shield"
                    className="h-10 object-contain mb-2"
                  />

                  <p className="text-red-600 font-bold text-xl">5,830.35 CAD</p>

                  <p className="text-sm text-gray-500">(1,746.00 + 4,084.35)</p>

                  <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full text-sm font-medium">
                    LEARN MORE
                  </button>
                </div>

                {/* CARD 2 */}
                <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <img
                    src="/side6.jpg"
                    alt="Travelance"
                    className="h-10 object-contain mb-2"
                  />

                  <p className="text-red-600 font-bold text-xl">5,913.00 CAD</p>

                  <p className="text-sm text-gray-500">(1,620.60 + 4,292.40)</p>

                  <p className="text-xs text-gray-500 mt-1">492.75 / Mth*</p>

                  <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full text-sm font-medium">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
