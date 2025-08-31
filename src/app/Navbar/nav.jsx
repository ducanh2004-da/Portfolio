import React from "react";
import { data } from "./data";

export default function Nav() {
    const [itemNav, setItem] = React.useState(() => [...data]);
    return (
        <nav className="w-full shadow-lg bg-white-200 fixed shadow-lg py-4 px-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">My Portfolio</h1>
            <ul className="flex space-x-8">
                {itemNav.map((item, idx) => (
                    <li
                        key={idx}
                        className={`text-lg font-medium transition-colors duration-200 cursor-pointer drop-shadow px-4 py-2 rounded-lg ${item.style ? "text-white bg-green-600 hover:bg-green-800" : "text-black hover:text-yellow-300"}`}
                    ><a className={`${item.style ? "text-white" : "text-black hover:text-blue-300"}`} href={`#${item.title}`}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}