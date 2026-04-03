import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/side7.jpg"
            alt="happy couple"
            className="w-full max-w-[700px] h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="max-w-lg w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Have a question? <br /> Feel Free to Ask
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree that my submitted data is being collected and stored.
                For further details, see our{" "}
                <span className="text-red-600 font-medium cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition w-full md:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
