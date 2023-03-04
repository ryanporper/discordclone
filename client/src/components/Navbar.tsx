import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="w-full h-16 bg-indigo-500 flex justify-between items-center text-center px-4 mx-auto">
      <a className="text-white text-2xl font-bold" href="/">
        Discord
      </a>
      <ul className="hidden lg:flex lg:justify-evenly lg:w-2/3">
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Download</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Nitro</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Discovery</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Safety</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Support</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Blog</a>
        </li>
        <li className="text-white font-bold hover:underline">
          <a href="https://discord.com/">Careers</a>
        </li>
      </ul>
      <div className="flex items-center ">
        <button className="bg-white hover:text-indigo-400 rounded-full p-2 text-xs">
          Open Discord
        </button>
        <div onClick={toggleNav} className="block cursor-pointer lg:hidden">
          <AiOutlineMenu className="text-white ml-4" size={30} />
        </div>
        <ul
          className={
            navbarOpen
              ? "fixed right-0 top-0 w-[60%] md:w-[40%] h-full rounded-lg bg-white ease-in-out duration-500"
              : "ease-in-out duration-500 fixed right-[-100%]"
          }
        >
          <div className="flex items-center text-center p-2">
            <h1 className="w-full text-3xl font-bold text-black m-2">
              Discord
            </h1>
            <AiOutlineClose
              onClick={toggleNav}
              className="text-black text-xl font-bold cursor-pointer"
            ></AiOutlineClose>
          </div>
          <li className="text-blue-400 font-bold m-2 hover:underline bg-slate-300 p-2 rounded-lg ">
            <a href="/">Home</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Download</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Nitro</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Nitro</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Discovery</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Safety</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Support</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Blog</a>
          </li>
          <li className="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
