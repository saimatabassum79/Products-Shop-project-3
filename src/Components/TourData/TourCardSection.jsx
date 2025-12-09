import React from "react";
import toursData from "../../../public/TourData.json";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TourCardSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gray-50 py-20">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl font-bold text-center mb-2 text-[#F54A00]"
      >
        Most Popular Tour Package
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Something Amazing Waiting For You
      </motion.h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto px-6 md:px-12">
        {toursData?.map((tour, index) => (
          <motion.div
            key={tour?.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={tour?.image}
                alt={tour?.title}
                className="w-full h-52 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

              {tour?.tag && (
                <span
                  className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-md font-medium shadow-md ${
                    tour?.tagColor || "bg-[#F54A00] text-white"
                  }`}
                >
                  {tour?.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-1">
              <h3 className="font-semibold text-xl">{tour.title}</h3>

              <p className="text-gray-500 text-sm flex items-center gap-2">
                📍 {tour.location}
              </p>

              <p className="text-gray-500 text-sm">🕓 {tour.days} Days</p>

              <div className="flex justify-between items-center mt-3">
                <p className="text-[#F54A00] font-bold text-lg">
                  ${tour.price}
                  <span className="text-sm text-gray-400">/Person</span>
                </p>

                <Link to={`/toursData/${tour.id}`}>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#F54A00] font-semibold hover:text-[#bc3d07] transition"
                >
                  View Details
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TourCardSection;
