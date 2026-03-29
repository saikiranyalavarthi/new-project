import React from "react";

const features = [
  {
    title: "24/7 Customer Support",
    desc: "We are always available to help you anytime with your insurance needs.",
    icon: "🎧",
  },
  {
    title: "Constant Protection",
    desc: "Your safety and security is our priority with continuous coverage.",
    icon: "🏠",
  },
  {
    title: "Uninterrupted Service",
    desc: "Reliable service without interruptions for your peace of mind.",
    icon: "⚙️",
  },
  {
    title: "Trusted Since 2001",
    desc: "Serving customers with trust and excellence for decades.",
    icon: "⭐",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-16 items-center">
        {/* LEFT */}
        <div>
          <p className="text-gray-500 mb-2">Why People Choose Us?</p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We're here for the bad times. The good ones, too.
          </h2>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            LEARN MORE
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA SECTION */}
      <div className="bg-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* LEFT CTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Need Help With The Policies?
            </h2>

            <p className="mt-4 text-lg">
              <span className="text-red-600 font-semibold">
                Call 416 543 9000
              </span>{" "}
              We are available 24x7 at your service
            </p>

            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
              SCHEDULE A CALL
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="support"
              className="w-[300px] md:w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
