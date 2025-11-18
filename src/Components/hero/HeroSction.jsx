import React from "react";
import { Plane, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="
      relative 
      flex flex-col md:flex-row 
      items-center justify-between 
      container mx-auto
      px-5 sm:px-6 md:px-12 lg:px-20 
      py-12 md:py-16 
      bg-white overflow-hidden
    ">
      {/* ==== LEFT TEXT CONTENT ==== */}
      <div className="md:w-1/2 z-10 space-y-4 md:space-y-5 text-center md:text-left">
        <p className="text-[#F54A00] font-semibold uppercase text-xs sm:text-sm tracking-wide">
          Dream Your Next Trip
        </p>

        <h1 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-bold text-gray-900 leading-tight
        ">
          Discover When Even <br className="hidden sm:block" /> You Want To Go
        </h1>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
          Whether you're looking for a romantic getaway, family trip, or solo adventure, 
          our travel experts can craft a personalized itinerary that exceeds expectations.
        </p>

        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Plane className="text-[#F54A00] w-5 h-5" />
            <span className="text-gray-700">
              <strong>Best Travel Agency:</strong> Explore unique destinations beyond the usual.
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <ShieldCheck className="text-[#F54A00] w-5 h-5" />
            <span className="text-gray-700">
              <strong>Secure Journey:</strong> Travel safely and comfortably.
            </span>
          </div>
        </div>

        <button className="
          mt-6 px-6 py-3 
          bg-[#F54A00] text-white 
          rounded-xl shadow-md 
          hover:bg-[#9a350a] 
          transition 
          text-sm sm:text-base
        ">
          Book Your Trip →
        </button>
      </div>

      {/* ==== RIGHT IMAGE CONTENT ==== */}
      <div className="
        md:w-1/2 relative 
        mt-10 md:mt-0 
        flex justify-center items-center
      ">
        {/* MAIN BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
          alt="Beach Boats"
          className="
            rounded-2xl 
            w-[260px] h-[220px] 
            sm:w-[340px] sm:h-[280px] 
            md:w-[430px] md:h-[400px] 
            object-cover shadow-xl
          "
        />

        {/* OVERLAY SMALL IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=80"
          alt="Traveler"
          className="
            absolute
            w-[90px] h-[90px]
            sm:w-[120px] sm:h-[120px]
            md:w-[150px] md:h-[150px]
            rounded-xl border-4 border-white 
            object-cover shadow-lg
            top-[65%] left-[5%] sm:top-[60%] sm:left-[10%]
          "
        />

        {/* ROTATED BACKGROUND TEXT (hidden on small screens) */}
        <h2 className="
          hidden lg:block
          absolute right-[-70px] 
          top-1/2 -translate-y-1/2 
          text-[80px] xl:text-[100px] 
          font-extrabold text-gray-100 
          tracking-widest rotate-90 select-none
        ">
          TRAVEL
        </h2>
      </div>
    </section>
  );
}
