import React, { useState } from "react";
import toursData from "../../../public/TourData.json"; 
import { Link } from "react-router";

const TourListing = () => {
    const [filters, setFilters] = useState({
        destination: [],
        activities: [],
        tripTypes: [],
        price: [0, 500],
        duration: [0, 7],
    });

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value,
        }));
    };
   
    return (
      <div>
           <div class="relative w-full h-[420px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0b/a5/a6/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_15c12bc8431b4bf1b61e')",
                }}
            >

                <div className="absolute inset-0 bg-black/40"></div>

                <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 class="text-5xl font-extrabold drop-shadow-lg">Trips</h1>
                    <p class="text-lg mt-3 opacity-90">Explore Your Dream Destination & Book Your Perfect Adventure</p>
                    <Link to="/"><p className="hover:text-orange-300">Home ></p></Link>
                </div>
            </div>
              <div><h1 className="text-4xl font-bold container mx-auto lg:px-20  mt-6">Trips</h1></div>
          <div className="container mx-auto px-20  pb-10 pt-4 grid lg:grid-cols-4 gap-8">
           
         
            {/* Left Filter Panel */}
            <aside className="space-y-6 bg-gray-100 p-5 rounded-lg">
                <div>
                    <h4 className="font-semibold mb-2">Filter By Destination</h4>
                    {["Dubai", "Maldives", "Italy", "Thailand"].map(dest => (
                        <label key={dest} className="flex items-center gap-2 text-gray-700">
                            <input type="checkbox" value={dest} />
                            {dest}
                        </label>
                    ))}
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Price</h4>
                    <input type="range" min="0" max="500" className="w-full" />
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <input type="range" min="0" max="7" className="w-full" />
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Activities</h4>
                    {["City Sightseeing", "Snorkeling", "Hiking", "Dining"].map(act => (
                        <label key={act} className="flex items-center gap-2 text-gray-700">
                            <input type="checkbox" value={act} />
                            {act}
                        </label>
                    ))}
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Trip Types</h4>
                    {["Camping", "City Exploration", "Family Roadtrip"].map(type => (
                        <label key={type} className="flex items-center gap-2 text-gray-700">
                            <input type="checkbox" value={type} />
                            {type}
                        </label>
                    ))}
                </div>
            </aside>

            {/* Right Tour Cards */}
            <section className="lg:col-span-3 space-y-6">
                {toursData.map(tour => (
                    <div key={tour.id} className="bg-white shadow-md rounded-xl p-4 flex gap-4 items-start">
                        <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-48 h-42 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-lg">{tour.title}</h3>
                                <span className="bg-purple-700 text-white text-xs px-2 py-1 rounded">Featured</span>

                            </div>
                            <p className="text-gray-500 my-2">{tour.description}</p>
                            <div className="flex justify-between mt-3 text-sm text-gray-600">
                                <p>📍 {tour.location}</p>
                                <p>🕓 {tour.days} Days</p>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <p className="font-bold text-orange-400">${tour.price}</p>
                                <Link to={`/toursData/${tour.id}`}><button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                                    View Details
                                </button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
      </div>
    );
};

export default TourListing;
