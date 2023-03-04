import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-800 pt-20 px-10">
      <div className="md:flex md:justify-evenly grid grid-cols-1">
        <div className="mb-10">
          <h4 className=" text-indigo-500 font-bold text-3xl">
            IMAGINE A PLACE
          </h4>
          <select className=" bg-slate-800 text-white text-lg mt-5">
            <option value="">English</option>
            <option value="">Español</option>
            <option value="">Deutsch</option>
            <option value="">Français</option>
          </select>
          <ul className="flex justify-start mt-5">
            <li className="text-white mr-2">
              <a href="https://twitter.com/">
                <AiOutlineTwitter size={30} />
              </a>
            </li>
            <li className="text-white mr-2">
              <a href="https://www.instagram.com/">
                <AiOutlineInstagram size={30} />
              </a>
            </li>
            <li className="text-white mr-2">
              <a href="https://www.facebook.com/">
                <AiFillFacebook size={30} />
              </a>
            </li>
            <li className="text-white mr-2">
              <a href="https://www.youtube.com/">
                <AiFillYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 lg:grid lg:grid-cols-4">
          <ul>
            <li className=" text-indigo-500 py-1">Product</li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Download</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Ntiro</a>
            </li>
            <li className="text-white hover:underline py-1 mb-10">
              <a href="https://discord.com/">Status</a>
            </li>
          </ul>

          <ul>
            <li className=" text-indigo-500 py-1">Company</li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">About</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Jobs</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Branding</a>
            </li>
            <li className="text-white hover:underline py-1 mb-10">
              <a href="https://discord.com/">Newsroom</a>
            </li>
          </ul>

          <ul>
            <li className=" text-indigo-500 py-1">Resources</li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">College</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Suport</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Safety</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Blog</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Feedback</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Build</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">StreamKit</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Creators</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Community</a>
            </li>
          </ul>

          <ul>
            <li className=" text-indigo-500 py-1">Policies</li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Terms</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Privacy</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Cookie Settings</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Guidelines</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Acknowledgements</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Licenses</a>
            </li>
            <li className="text-white hover:underline py-1">
              <a href="https://discord.com/">Moderation</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-6 pb-12 mt-10 items-center border-t-2 border-indigo-500">
        <a className="text-white text-xl font-bold" href="https://discord.com/">
          Discord
        </a>
        <button className=" bg-indigo-500 rounded-full text-sm font-bold text-white p-3 hover:bg-indigo-400">
          <a href="https://discord.com/">Open Discord</a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
