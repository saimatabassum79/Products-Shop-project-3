import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const toursData = useLoaderData();

  // Find the selected travel package
  const travel = toursData.find(t => t.id === parseInt(id));

  if (!travel) {
    return (
      <div className=" flex items-center justify-center bg-gray-100">
        <p className="text-2xl text-gray-600">Package not found!</p>
      </div>
    );
  }

  const {
    title,
    location,
    days,
    price,
    priceUnit,
    badge,
    discount,
    image
  } = travel;

  return (
    <div className=" bg-gray-50 mx-auto container mt-10  lg:px-24 px-2 py-12">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-96 rounded-lg  bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>

        {/* Content on Image */}
        <div className="absolute bottom-0 left-0 right-0 text-white p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {badge && (
                <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {badge}
                </span>
              )}
              {discount && (
                <span className="px-4 py-2 bg-red-600 text-white font-bold rounded-full">
                  {discount}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold lg:mb-3 mb-10">{title}</h1>
            <p className="text-xl mb-20 lg:mb-0 md:text-2xl opacity-90 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {location}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Price Card */}
            <div className="md:col-span-1 bg-gradient-to-br from-orange-600 to-purple-300 text-white p-8 rounded-2xl text-center">
              <p className="text-lg opacity-90">Starting From</p>
              <div className="my-4">
                <span className="text-5xl font-bold">${price}</span>
                <span className="text-lg">/{priceUnit}</span>
              </div>
              <p className="text-3xl font-bold">{days} Days</p>
              <button className="mt-8 w-full bg-white text-blue-700 font-bold py-4 rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book Now
              </button>
            </div>

            {/* Package Info */}
            <div className="md:col-span-2 col-span-1 lg:space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-lg">{days} Days / {days - 1} Nights</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-full">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Destination</p>
                      <p className="text-lg">{location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included (Optional - you can expand later) */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔</span> Hotel accommodation (4-5 star)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔</span> Daily breakfast & selected meals
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔</span> Airport transfers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔</span> Professional tour guide
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✔</span> All entrance fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;