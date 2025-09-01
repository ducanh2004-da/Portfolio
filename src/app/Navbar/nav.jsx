
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { data } from "./data";

export default function Nav() {
    const [itemNav] = useState(() => [...data]);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="z-10 w-full shadow-lg bg-white fixed py-4 px-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">My Portfolio</h1>
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8">
                {itemNav.map((item, idx) => (
                    <li
                        key={idx}
                        className={`text-lg font-medium transition-colors duration-200 cursor-pointer drop-shadow px-4 py-2 rounded-lg ${item.style ? "text-white bg-green-600 hover:bg-green-800" : "text-black hover:text-yellow-300"}`}
                    >
                        <a className={`${item.style ? "text-white" : "text-black hover:text-blue-300"}`} href={`#${item.title}`}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Hamburger icon */}
            <button className="md:hidden bg-white text-3xl text-gray-700 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars className="mr-5" />}
            </button>
            {/* Mobile menu */}
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden animate-fade-in">
                    {itemNav.map((item, idx) => (
                        <li
                            key={idx}
                            className={`w-4/5 text-lg font-medium transition-colors duration-200 cursor-pointer drop-shadow px-4 py-2 rounded-lg text-center ${item.style ? "text-white bg-green-600 hover:bg-green-800" : "text-black hover:text-yellow-300"}`}
                        >
                            <a className={`${item.style ? "text-white" : "text-black hover:text-blue-300"}`} href={`#${item.title}`} onClick={() => setMenuOpen(false)}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}