import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">TravelX</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Discover amazing destinations and create unforgettable memories
            with our curated travel packages.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Tours</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe for latest tour updates 🚀
          </p>

          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-800 outline-none"
            />
            <button className="bg-[#F54A00]  rounded-lg mr-2 text-white px-4 py-3 hover:bg-[#c54109] transition-all flex items-center gap-1">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} TravelX. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
