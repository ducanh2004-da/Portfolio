
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { data } from "./data";

export default function Nav() {
    const [navItem, setNave] = useState([...data]);
    const [openMenu, setMenu] = useState(false);
    return (
        <nav className="flex justify-between p-5 fixed w-full z-10 bg-white">
            <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">
                My Portfolio
            </h1>
            <ul className="navlist hidden md:flex space-x-8">
                {
                    navItem.map((item, idx) => (
                        <li key={idx} className={`text-lg font-medium transition-colors duration-200 cursor-pointer drop-shadow px-4 py-2 rounded-lg ${item.style ? "bg-green-400" : "text-black"}`}>
                            <a href="" className={`${item.style ? "text-white bg-green-400" : "text-black"} hover:text-blue-300`}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className="md:hidden bg-white text-3xl text-gray-700 focus:outline-none" onClick={() => setMenu(!openMenu)}>
                {openMenu ? <FaBars /> : <FaTimes />}
            </button>
            {
                openMenu && (
                    <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden animate-fade-in">
                        {
                            navItem.map((item, idx) => (
                                <li key={idx} className={`w-4/5 text-lg font-medium transition-colors duration-200 cursor-pointer drop-shadow px-4 py-2 rounded-lg text-center hover:text-yellow-300 ${item.style ? "text-white bg-green-100" : "text-black"}`}>
                                    <a href="" className="hover:text-blue-300">
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </nav>
    )
}