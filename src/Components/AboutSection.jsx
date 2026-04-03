import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      {/* 🔹 TOP BRAND STRIP */}

      {/* 🔹 MAIN SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-12">
        {/* 🔸 LEFT CONTENT */}
        <div>
          <p className="text-gray-500 uppercase text-sm tracking-wide">
            WELCOME TO Canadian L.I.C INC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug text-gray-900">
            Most Trusted Insurance Broker in Canada | Canadian L.I.C Inc
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Harpreet Puri is a well certified Insurance Adviser and MDRT
            qualifier with a constructive consistency for almost 10 years. She
            is recognized as one of the most pinnacle Insurance Brokers in GTA,
            Ontario. Bearing the right technical knowledge of all formalities
            and applicable legalities, we can help you get the right Insurance
            Advice that you are looking for.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We aim to provide you the right product knowledge which you look for
            in a proficient Insurance Advisor. Having chosen us, we can assure
            you the best services.
          </p>
        </div>

        {/* 🔸 RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center md:justify-end">
          {/* MAIN BIG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Family"
            className="w-[320px] md:w-[460px] h-auto rounded-md shadow-lg object-cover"
          />

          {/* SMALL OVERLAY IMAGE */}
          <img
            src="/side3.jpg"
            alt="Elder Couple"
            className="hidden md:block absolute top-10 right-[-30px] w-[180px] rounded-md shadow-md border-4 border-white"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-[-25px] left-6 bg-white px-6 py-4 rounded-md shadow-xl">
            <p className="text-gray-500 text-xl">Our Advisers are</p>
            <h3 className="text-4xl font-bold text-gray-900">MDRT Qualified</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
