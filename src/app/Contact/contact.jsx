import React, { useState } from "react";


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
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">Contact me Teehee!</h2>
      <p className="text-lg text-gray-600 text-center mb-8">Interested in working together or have a question? Fill out the form below and I'll get back to you soon!</p>
      <form className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-10 border border-blue-100" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="name" className="font-semibold text-gray-700 pl-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="font-semibold text-gray-700 pl-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="message" className="font-semibold text-gray-700 pl-1">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-gradient-to-r from-blue-50 to-pink-50"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 text-white px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform font-bold text-lg tracking-wide"
        >
          Send Message
        </button>
        {submitted && (
          <div className="text-green-600 font-semibold text-center mt-2">Sorry, the form doesn't currently work now, please contact me via gmail: andott1@gmail.com</div>
        )}
      </form>
    </div>
  );
}
