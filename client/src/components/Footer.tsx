import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 py-14">
      <div className="flex justify-evenly">
        <div>
          <h4 className=" text-indigo-500 font-bold text-2xl">
            IMAGINE A PLACE
          </h4>
          <p className="text-white">Dropdown</p>
          <p className="text-white">Icons</p>
        </div>
        <div className="">
          <ul>
            <li className=" text-indigo-500">Product</li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Download</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Ntiro</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Status</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className=" text-indigo-500">Company</li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">About</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Jobs</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Branding</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Newsroom</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className=" text-indigo-500">Resources</li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">College</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Suport</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Safety</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Blog</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Feedback</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Build</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">StreamKit</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Creators</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Community</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className=" text-indigo-500">Policies</li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Terms</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Privacy</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Cookie Settings</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Guidelines</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Acknowledgements</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Licenses</a>
            </li>
            <li className="text-white hover:underline">
              <a href="https://discord.com/">Moderation</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-between p-6 mt-10 items-center border-t-2 border-indigo-400">
        <a className="text-white text-lg font-bold" href="https://discord.com/">
          Discord
        </a>
        <button className=" bg-indigo-400 rounded-full text-sm font-bold text-white p-3 hover:bg-indigo-300">
          <a href="https://discord.com/">Open Discord</a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
