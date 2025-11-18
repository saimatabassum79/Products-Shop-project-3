import React from "react";
import { BlogSection } from "./BlogSection/BlogSection";



export default function Blog() {
  return (
    <div className="mx-auto container px-12 py-6 text-gray-900">
      {/* HERO SECTION */}
      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/40 p-10 rounded-xl hover:scale-105 duration-500 cursor-pointer text-white max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-lg mb-6">
            Find the best tours, trips & extraordinary travel experiences.
          </p>
          <button className="px-8 py-3 cursor-pointer bg-[#F54A00] rounded-full text-lg font-semibold">
            Explore Tours
          </button>
        </div>
      </section>

      {/* POPULAR TOURS */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Most Popular Tours</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={`https://media.gettyimages.com/id/145668352/photo/male-harbor-aerial-view-maldives.jpg?s=612x612&w=0&k=20&c=X690VS9XyD4mWlEkAW1KEPOsM1DBdtXsajGpn-IJa00=`}
                alt="tour"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Amazing Tour {id}</h3>
                <p className="text-gray-600 mb-4">
                  Experience breathtaking locations with professional guides.
                </p>
                <button className="px-6 py-2 hover:scale-105 duration-500 cursor-pointer bg-[#F54A00] text-white rounded-full font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80

"
                className="h-20 mx-auto mb-6"
                alt=""
              />
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Get unbeatable prices for all travel destinations.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80
"
                className="h-20 mx-auto mb-6"
                alt=""
              />
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                We are here to assist you anytime you need.
              </p>
            </div>

            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854866.png"
                className="h-20 mx-auto mb-6"
                alt=""
              />
              <h3 className="text-xl font-bold mb-3">Handpicked Tours</h3>
              <p className="text-gray-600">
                Choose from professionally curated tour packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Travelers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white shadow-lg rounded-xl p-8">
              <p className="text-gray-600 mb-4 italic">
                "Amazing experience! Highly recommended for anyone looking for
                adventure and comfort."
              </p>
              <h4 className="font-bold">Traveler {id}</h4>
              <p className="text-sm text-gray-500">World Explorer</p>
            </div>
          ))}
        </div>
      </section>
       <BlogSection></BlogSection>
    </div>
  );
}


