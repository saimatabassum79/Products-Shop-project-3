// src/components/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration 1s
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-10"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="zoom-in">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-right">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div data-aos="fade-left">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div data-aos="fade-right">
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <div data-aos="zoom-in">
            <button
              type="submit"
              className="w-full bg-[#F54A00] hover:bg-[#b63e0b] text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-gray-600" data-aos="fade-up">
          <p>Email: contact@tourex.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: Cox's Bazar, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;