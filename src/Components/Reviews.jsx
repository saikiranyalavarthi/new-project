import React from "react";

const reviews = [
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    name: "Nicole Smith",
    location: "Hamilton",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    name: "Nicole Smith",
    location: "Hamilton",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    name: "Nicole Smith",
    location: "Hamilton",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    name: "Nicole Smith",
    location: "Hamilton",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export default function Reviews() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-6 items-center mb-12">
          {/* Rating */}
          <div>
            <h2 className="text-5xl font-bold text-red-600">4.95 / 5</h2>
          </div>

          {/* Google Reviews */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>{" "}
              <span className="text-gray-700 text-lg">Reviews</span>
            </h3>

            {/* Stars */}
            <div className="flex justify-center mt-2 text-yellow-400 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          {/* Right Text + Button */}
          <div className="text-center md:text-right">
            <p className="text-gray-700 mb-4">
              100% of customers recommend us! The Best Canadian Insurance
              Advisor!
            </p>

            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              ALL REVIEWS
            </button>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Quote */}
              <div className="text-gray-300 text-5xl mb-4">“</div>

              <p className="text-gray-600 text-sm mb-6">{item.text}</p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.location}</p>

                  {/* Stars */}
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
