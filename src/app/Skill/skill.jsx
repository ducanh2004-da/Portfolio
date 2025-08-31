import React from "react";
import { data } from "./data";
export default function Skill() {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="text-5xl font-extrabold mt-10 text-purple-700 mb-4">{data.title}</div>
            <div className="mt-2 text-xl text-gray-700 mb-6">{data.description}</div>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Proficiency</h2>
                    <ul className="space-y-6">
                        {data.technical.map((item, idx) => (
                            <li key={idx} className="mb-2">
                                <div className="flex justify-between mb-1">
                                    <span className="font-semibold text-gray-700">{item.title}</span>
                                    <span className="text-gray-500">{item.percentage}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-700" style={{width: item.percentage}}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Technologies & Tools</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {data.technology.map((item, idx) => (
                            <li key={idx} className="bg-white rounded-lg shadow p-3 text-center font-medium text-gray-700 hover:bg-blue-100 transition-colors cursor-pointer" title={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}