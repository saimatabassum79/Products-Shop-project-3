import React, { useEffect, useState } from "react";

export default function DestinationsSection() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destination.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Failed to load destinations:", err));
  }, []);

  return (
    <section className="px-6 md:px-20 container mx-auto py-16 text-center bg-gray-50">
      <p className="text-[#F54A00] uppercase font-semibold text-sm">Next Adventure Destination</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">Popular Travel Destinations Worldwide</h2>
      <p className="text-gray-600 mt-2 mb-10">
        Explore the most popular destinations and step out of your comfort zone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white cursor-pointer hover:scale-105 duration-500  rounded-2xl shadow-md hover:shadow-lg transition p-2">
            <img
              src={dest.image}
              alt={dest.name}
              className="rounded-xl hover:scale-105 duration-500 h-48 w-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{dest.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{dest.description}</p>
            <button className="px-4 py-2 bg-[#F54A00] text-white rounded-lg hover:bg-[#a5390b] transition">
              Go Tour
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}