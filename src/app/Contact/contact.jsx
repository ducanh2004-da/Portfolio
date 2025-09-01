

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaGithub , FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 bg-clip-text text-transparent" data-aos="fade-right">Contact me Teeheee!</h2>
      <p className="text-lg text-gray-600 text-center mb-8" data-aos="fade-left">Interested in working together or have a question? Fill out the form below and I'll get back to you soon!</p>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch">
        {/* Contact Info */}
        <div className="flex-1 h-96 bg-white rounded-3xl shadow-2xl p-10 border border-blue-100 flex flex-col justify-center" data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
          <div className="flex items-center text-center gap-4 m-auto">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <span className="font-medium text-gray-700">anhdott1@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 m-auto">
            <FaPhone className="text-purple-500 text-2xl" />
            <span className="font-medium text-gray-700">0353199400</span>
          </div>
          <div className="flex items-center gap-4 m-auto">
            <FaMapMarkerAlt className="text-purple-500 text-2xl" />
            <span className="font-medium text-gray-700">KTX Khu B, TP.HCM</span>
          </div>
          <div className="mt-8">
            <span className="font-semibold text-gray-700">Connect With Me</span>
            <div className="flex gap-4 justify-center mt-5">
              <a href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-anh-%C4%91%E1%BB%97-4b68102ba/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-purple-500"><FaLinkedin /></a>
              <a href="https://www.facebook.com/oucang.606021" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-purple-500"><FaFacebook /></a>
              <a href="mailto:anhdott1@email.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-purple-500"><IoMail /></a>
              <a href="https://github.com/ducanh2004-da" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-purple-500"><FaGithub /></a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 bg-white rounded-3xl shadow-2xl p-10 border border-blue-100 flex flex-col gap-8" onSubmit={handleSubmit} data-aos="zoom-in">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Send a Message</h3>
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="name" className="font-semibold text-gray-700 pl-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
              required
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="email" className="font-semibold text-gray-700 pl-1">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
              required
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="message" className="font-semibold text-gray-700 pl-1">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
              required
              data-aos="fade-up"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform font-bold text-lg tracking-wide flex items-center justify-center gap-2"
            data-aos="zoom-in"
          >
            Send Message <span className="text-xl">&#10148;</span>
          </button>
          {submitted && (
            <div className="text-green-600 font-semibold text-center mt-2">Sorry, the form doesn't currently work now, please contact me via gmail: andott1@gmail.com</div>
          )}
        </form>
      </div>
    </div>
  );
}
