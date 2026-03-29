import React from "react";

const services = [
  { title: "Critical Illness Insurance", icon: "💊" },
  { title: "Disability Insurance", icon: "♿" },
  { title: "Mortgage Insurance", icon: "🏠" },
  { title: "Loan Protection Insurance", icon: "💰" },
  { title: "RESP", icon: "🎓" },
  { title: "RRSP", icon: "💵" },

  { title: "Term Life Insurance", icon: "☂️" },
  { title: "Whole Life Insurance", icon: "🛡️" },
  { title: "Universal Life Insurance", icon: "💙" },
  { title: "1 Million Dollar Policy", icon: "💲" },
  { title: "Money Back Life Insurance", icon: "💸" },
  { title: "International Student Insurance", icon: "🎒" },

  { title: "Travel Insurance", icon: "🧳" },
  { title: "Visitor Insurance", icon: "👨‍👩‍👧" },
  { title: "Key Person Insurance", icon: "🔑" },
  { title: "Group Insurance", icon: "👥" },
  { title: "Estate Planning", icon: "📄" },
  { title: "Super Visa Insurance", icon: "👴👵" },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="bg-red-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition">
          VIEW ALL SERVICES
        </button>
      </div>
    </section>
  );
}
