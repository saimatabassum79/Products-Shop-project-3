

import React from 'react';
import { motion } from 'framer-motion';

const tours = [
  { id: 1, title: 'Cox\'s Bazar Day Trip', days: 1, price: 25, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200' },
  { id: 2, title: 'Sundarbans Adventure', days: 2, price: 120, img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200' },
  { id: 3, title: 'Sylhet Tea Gardens', days: 1, price: 45, img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200' },
  { id: 4, title: 'Bandarban Trek', days: 3, price: 220, img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200' },
];

const features = [
  { id: 1, title: 'Trusted Tours', desc: 'Verified guides and easy cancellation.' },
  { id: 2, title: 'Best Price Guarantee', desc: 'Competitive prices and transparent fees.' },
  { id: 3, title: '24/7 Support', desc: 'We are available any time for help.' },
];

export default function  About() {
  return (
    <div className="my-10 bg-gradient-to-b from-white to-slate-50 text-slate-900">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <section className="mt-12">
          <SectionHeader title="Popular Tours" subtitle="Handpicked tours people love" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((t, idx) => (
              <TourCard key={t.id} tour={t} index={idx} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="Why Choose Tourex" subtitle="We make travel simple and safe" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.id} whileHover={{ y: -6 }} className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="What People Say" subtitle="Testimonials" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial name="Saima" text="Amazing experience. Guide was professional and friendly." />
            <Testimonial name="Mumu" text="Smooth booking process and great value for money." />
            <Testimonial name="Sathi" text="The highlights were perfectly organized. Highly recommended." />
          </div>
        </section>
      </main>

      
    </div>
  );
}

function Hero() {
  return (
    <section className="mt-8 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')] bg-cover mt-10 bg-center rounded-2xl overflow-hidden shadow-lg">
      <div className="backdrop-brightness-75 bg-black/30 py-20 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-extrabold">Discover your next adventure</motion.h2>
          <p className="mt-4 text-sm sm:text-base">Find packages, day trips, and guided tours — handpicked for you.</p>

          <div className="mt-6">
            <SearchForm />
          </div>

          <div className="mt-6 text-xs text-slate-200">Top searches: Cox's Bazar · Sundarbans · Sylhet</div>
        </div>
      </div>
    </section>
  );
}

function SearchForm() {
  return (
    <motion.form whileTap={{ scale: 0.995 }} className=" bg-white/80 rounded-full p-1 flex items-center max-w-2xl mx-auto shadow-md">
      <input className="flex-1 px-4 py-3 rounded-l-full outline-none text-black " placeholder="Where do you want to go?" />
      <input className="w-32 px-4 py-3 outline-none border-l text-black " placeholder="Dates" />
      <select className="w-28 px-3 py-3 text-black outline-none border-l rounded-r-full">
        <option>1 person</option>
        <option>2 people</option>
        <option>Group</option>
      </select>
      <button type="button" className="ml-2 mr-1 cursor-pointer px-4 py-2 rounded-full bg-orange-500 text-white font-semibold">Search</button>
    </motion.form>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <a className="text-sm font-medium cursor-pointer text-[#F54A00] hover:underline">View all</a>
    </div>
  );
}

function TourCard({ tour, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="bg-white hover:scale-105 duration-500  rounded-2xl overflow-hidden shadow-md">
      <div className="h-60  bg-slate-200">
        <img src={tour.img} alt={tour.title} className="w-full hover:scale-110 duration-500 h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{tour.title}</h3>
        <p className="text-xs text-slate-500 mt-1">{tour.days} day(s) · Guided</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-600">From</div>
            <div className="text-lg font-bold">${tour.price}</div>
          </div>
          <button className="px-3 py-2 rounded-lg bg-[#F54A00] text-white text-sm">View</button>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, text }) {
  return (
    <motion.blockquote whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-2xl shadow-md">
      <p className="text-sm text-slate-700">“{text}”</p>
      <footer className="mt-4 text-xs text-slate-500">— {name}</footer>
    </motion.blockquote>
  );
}