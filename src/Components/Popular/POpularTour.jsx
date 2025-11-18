import React from "react";
import { motion } from "framer-motion";

const PopularTour = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="
        py-12 sm:py-16 md:py-20 
        mt-8 sm:mt-10 md:mt-12 
        text-center container mx-auto 
        px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden
      "
    >
      {/* Heading Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-2"
      >
        <h4 className="text-[#F54A00] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
          Most Popular Tour
        </h4>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Let’s Discover The World With Our Excellent Eyes
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 px-2">
          Whether you’re looking for a romantic getaway, family-friendly solo
          journey, or an adventure to explore the world — we can tailor an
          itinerary that exceeds your expectations.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.93 }}
          className="
            bg-[#F54A00] text-white px-5 sm:px-6 py-2.5 sm:py-3 
            rounded-lg shadow-md text-sm sm:text-base
          "
        >
          TAKE A TOUR →
        </motion.button>
      </motion.div>

      {/* Images Animation */}
      <div
        className="
          mt-10 sm:mt-12 
          flex flex-wrap justify-center gap-4 sm:gap-6
        "
      >
        {[
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        ].map((url, index) => (
          <motion.img
            key={index}
            src={url}
            alt="Tour"
            custom={index}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              w-36 h-28
              sm:w-56 sm:h-40
              md:w-72 md:h-48
              lg:w-80 lg:h-52
              object-cover rounded-lg shadow-lg 
              hover:scale-105 transition-transform duration-300 cursor-pointer
            "
          />
        ))}
      </div>
    </section>
  );
};

export default PopularTour;
