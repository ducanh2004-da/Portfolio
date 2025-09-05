import React from "react";
import { data } from "./data";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Header() {
    // Corrected text array
    const hi = ['H', 'i', 'i', ',', ' ', 'I', "'", 'm', ' ', 'D', 'o', ' ', 'D', 'u', 'c', ' ', 'A', 'n', 'h'];
    const [hiText, setHi] = React.useState('');

    React.useEffect(()=>{
        setHi('');
        var i = 0;
        var interval = setInterval(()=>{
            setHi(prev => prev + hi[i]);
            i++;
            if(i === hi.length - 1) clearInterval(interval);
        },120)
        return () => clearInterval(interval);
    },[])

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img className="mt-20 rounded-full shadow-xl border-4 border-white" height={180} width={180} src={data.image.url} alt={data.image.alt} />
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg animate-fade-in">{hiText}</h1>
            <h3 className="mt-4 text-xl md:text-2xl text-gray-600 animate-fade-in-slow">{data.description}</h3>
            <div className="flex justify-center mt-8 gap-4">
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform font-semibold">View my work</button>
                <button className="bg-white text-green-600 border border-green-400 px-6 py-2 rounded-lg shadow hover:bg-green-50 hover:scale-105 transition-transform font-semibold">Download Resume</button>
            </div>
            <div className="flex justify-center mt-8 gap-6">
                <a href="https://github.com/ducanh2004-da">
                    <FaGithub className="cursor-pointer text-3xl text-gray-700 hover:text-black transition-colors" />
                </a>
                <a href="https://www.facebook.com/oucang.606021">
                    <FaFacebook className="cursor-pointer text-3xl text-blue-600 hover:text-blue-800 transition-colors" />
                </a>
                <a href="mailto:anhdott1@email.com">
                    <IoMail className="cursor-pointer text-3xl text-red-500 hover:text-red-700 transition-colors" />
                </a>
            </div>
            <a href="#About">
                <FaArrowDownLong className="mx-auto mt-10 text-2xl text-gray-400 animate-bounce cursor-pointer" />
            </a>
        </div>
    );
}