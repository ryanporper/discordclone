import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-indigo-500 flex items-center justify-center">
      <div>
        <a className="text-white font-bold" href="https://discord.com/">
          Discord
        </a>
      </div>
      <ul className="flex justify-evenly w-2/3">
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
      <div>
        <button className="bg-white hover:text-indigo-400 rounded-full p-2 text-xs">
          Open Discord
        </button>
      </div>
    </div>
  );
};

export default Navbar;
