import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Brand Strip */}
      <div className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between overflow-x-auto">
        <span className="text-sm md:text-lg font-semibold whitespace-nowrap">
          COMPARE & GET LOWEST QUOTES FROM CANADA'S TOP INSURERS
        </span>

        <div className="flex gap-10 items-center ml-6">
          <span className="opacity-70">IA Financial</span>
          <span className="opacity-70">Foresters</span>
          <span className="opacity-70">Desjardins</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-12">
        {/* Left Content */}
        <div>
          <p className="text-gray-500 uppercase text-sm">
            WELCOME TO Canadian L.I.C INC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Most Trusted Insurance Broker in Canada | Canadian L.I.C Inc
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Harpreet Puri is a well certified Insurance Adviser and MDRT
            qualifier with a constructive consistency for almost 10 years. She
            is recognized as one of the most pinnacle Insurance Brokers in GTA,
            Ontario.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We aim to provide you the right product knowledge which you look for
            in a proficient Insurance Advisor. Having chosen us, we can assure
            you the best services.
          </p>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center md:justify-end">
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="family"
            className="w-[350px] md:w-[450px] rounded-lg shadow-lg"
          />

          {/* Small Image */}
          <img
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4"
            alt="elder"
            className="hidden md:block absolute bottom-0 right-0 w-[200px] rounded-lg shadow-md border-4 border-white"
          />

          {/* Floating Card */}
          <div className="absolute bottom-[-30px] left-4 md:left-10 bg-white p-6 rounded-lg shadow-xl">
            <p className="text-gray-600 text-sm">Our Advisers are</p>
            <h3 className="text-2xl font-bold">MDRT Qualified</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
