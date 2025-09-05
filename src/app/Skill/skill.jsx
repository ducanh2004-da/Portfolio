import React from "react";
import { data } from "./data";
import { FaCode, FaTools, FaDatabase, FaReact, FaServer } from "react-icons/fa";

const iconMap = {
  "Frontend": <FaReact className="text-blue-400 text-3xl mb-2" />,
  "Backend": <FaServer className="text-green-500 text-3xl mb-2" />,
  "Database": <FaDatabase className="text-purple-500 text-3xl mb-2" />,
  "Tools": <FaTools className="text-yellow-500 text-3xl mb-2" />,
  "Other": <FaCode className="text-pink-500 text-3xl mb-2" />,
};

export default function Skill() {
    return (
        <div className="w-full max-w-5xl mx-auto" data-aos="fade-up">
            <div className="text-5xl font-extrabold mt-10 text-purple-700 mb-4 text-center" data-aos="fade-right">{data.title}</div>
            <div className="mt-2 text-xl text-gray-700 mb-10 text-center" data-aos="fade-left">{data.description}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {data.skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 hover:scale-[1.03] transition-transform border border-blue-100 flex flex-col items-center"
                        data-aos="zoom-in"
                        data-aos-delay={idx * 100}
                    >
                        {iconMap[skill.title] || <FaCode className="text-3xl mb-2 text-gray-400" />}
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                        <p className="text-gray-600 mb-4 text-center">{skill.description}</p>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                            {skill.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="bg-white rounded-lg shadow p-3 text-center font-medium text-gray-700 hover:bg-purple-100 transition-colors cursor-pointer border border-purple-100"
                                    title={item}
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 80}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}