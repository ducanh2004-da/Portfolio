import React from "react";
import { projects } from "./data";


export default function Project() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <h2 className="text-4xl font-extrabold text-pink-700 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors font-semibold">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
