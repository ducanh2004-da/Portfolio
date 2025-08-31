import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 mt-16 shadow-inner">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-bold text-lg">Do Duc Anh</span> &copy; {new Date().getFullYear()}<br/>
          <span className="text-sm">Full-Stack Developer Portfolio</span>
        </div>
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/ducanh2004-da" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><i className="fab fa-github"></i>GitHub</a>
          <a href="https://www.facebook.com/oucang.606021" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><i className="fab fa-facebook"></i>Facebook</a>
          <a href="mailto:anhdott1@email.com" className="hover:text-yellow-300 transition-colors"><i className="fas fa-envelope"></i>Email</a>
        </div>
      </div>
    </footer>
  );
}
