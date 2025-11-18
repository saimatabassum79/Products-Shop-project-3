import React from "react";

export default function OfferSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px]  flex items-center justify-center overflow-hidden rounded-none">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
        alt="Summer Beach"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY GRADIENT (for text readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative container mx-auto  z-10 text-center md:text-left text-white max-w-2xl px-6 md:px-20">
        <p className="uppercase tracking-wide text-gray-200 font-semibold text-sm">
          Summer Special
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
          Enjoy Summer Deals
        </h2>
        <p className="text-xl mb-6">
          Up to <span className="font-bold text-gray-200">40% Discount</span> on your next trip
        </p>
        <button className="px-8 py-3 bg-[#F54A00] text-white font-semibold rounded-xl shadow-md hover:bg-[#b23d0b] transition">
          See Details →
        </button>
      </div>
    </section>
  );
}