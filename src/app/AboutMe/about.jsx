import React from "react";
import { data } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div data-aos="fade-up" className="text-5xl font-extrabold mt-10 text-blue-700 mb-4">{data.title}</div>
            <div data-aos="fade-up" className="mt-2 text-xl text-gray-700 mb-6">{data.description}</div>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div data-aos="fade-right" className="flex-1 bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-gray-600 mb-6">{data.detail}</div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-xl p-6 shadow">
                            <span className="text-3xl font-bold text-blue-600">{data.project}</span>
                            <span className="text-gray-500 mt-2">Projects Completed</span>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-xl p-6 shadow">
                            <span className="text-3xl font-bold text-blue-600">{data.experience}</span>
                            <span className="text-gray-500 mt-2">Years Experience</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="flex-1 flex flex-col gap-6">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-6 shadow-xl text-white">
                        <h3 className="font-bold text-xl mb-2">{data.frontend.title}</h3>
                        <p>{data.frontend.description}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-6 shadow-xl text-white">
                        <h3 className="font-bold text-xl mb-2">{data.backend.title}</h3>
                        <p>{data.backend.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}