import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Hero = () => {
    return (
        <div
            className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/kgJLqdD5/Whats-App-Image-2025-11-09-at-8-19-40-AM.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-white text-center px-4 max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg mb-2 tracking-wide uppercase">
                    Valid Till 22 August
                </p>

                <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                    Maldives Island
                </h1>

                <p className="mb-5 text-gray-200 text-sm sm:text-base md:text-lg">
                    Discover a world of stunning beaches, luxury resorts, and breathtaking sunsets.
                    Your dream vacation is just a click away!
                </p>

                <p className="my-4 text-base sm:text-lg">
                    Booking starts from{" "}
                    <span className="font-bold text-xl sm:text-2xl">$299</span>/night
                </p>

                <button className="bg-[#F74A1F] hover:scale-105 duration-300 cursor-pointer hover:bg-[#d53f1a] transition px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base">
                    Take a Tour
                </button>
            </div>

            {/* Search Bar */}
            <div className="absolute hidden md:block -bottom-20 sm:-bottom-16 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] lg:w-[75%] max-w-5xl">
                <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl 
                    flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center">

                    <select className="bg-[#F3F3F4] px-4 py-2.5 sm:py-3 rounded-md text-gray-700 w-full md:w-auto text-sm sm:text-base">
                        <option>📍 Location</option>
                    </select>

                    <select className="bg-[#F3F3F4] px-4 py-2.5 sm:py-3 rounded-md text-gray-700 w-full md:w-auto text-sm sm:text-base">
                        <option>Trip Types</option>
                    </select>

                    <select className="bg-[#F3F3F4] px-4 py-2.5 sm:py-3 rounded-md text-gray-700 w-full md:w-auto text-sm sm:text-base">
                        <option>🕓 0 Days - 7 Days</option>
                    </select>

                    <select className="bg-[#F3F3F4] px-4 py-2.5 sm:py-3 rounded-md text-gray-700 w-full md:w-auto text-sm sm:text-base">
                        <option>$11 - $450</option>
                    </select>

                    <button className="bg-[#F74A1F] flex items-center justify-center gap-2 
                        text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-md font-semibold 
                        w-full md:w-auto text-sm sm:text-base hover:bg-[#d53f1a] transition">
                        <CiSearch className="text-xl" />
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
