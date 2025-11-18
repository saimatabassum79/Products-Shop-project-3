import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {  IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bgClass =
    location.pathname === '/' ? 'bg-white/5' : 'bg-black/50';

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/fea" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${bgClass} backdrop-blur-md shadow-md`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10 lg:px-16">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
            Tourex
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map(item => (
            <NavLink
              key={item.link}
              to={item.link}
              className={
                `relative text-sm lg:text-base text-white font-semibold flex items-center gap-1 group [&.active]:text-[#f46a48]
                `
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff6a44] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-white">
          {/* Phone */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 border-r border-gray-400 pr-3 sm:pr-4">
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
              <FaPhone className="text-white text-base sm:text-lg" />
            </div>
            <div className="text-xs sm:text-sm leading-tight">
              <p className="text-gray-200">Call Us</p>
              <p className="font-semibold">+1234 76384</p>
            </div>
          </div>

          {/* Language */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-orange-300 transition">
            <p className="font-semibold text-sm sm:text-base">ENG</p>
            <IoChevronDown />

          </div>

          {/* Login */}
          <button className="bg-[#F74A1F] hover:bg-[#bc3311] text-xs sm:text-sm md:text-base font-semibold px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-md transition">
            Login
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white text-2xl">
              {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md absolute w-full left-0 top-full z-40">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map(item => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-white text-lg font-semibold ${isActive ? 'text-orange-400' : 'text-gray-200'} hover:text-orange-400 transition`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
