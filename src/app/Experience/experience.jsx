import React from "react";
import { experiences } from "./data";

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div className="text-xl font-bold text-gray-800">{exp.role}</div>
              <div className="text-md text-gray-500">{exp.company}</div>
              <div className="text-md text-gray-400 italic">{exp.period}</div>
            </div>
            <p className="text-gray-600 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
