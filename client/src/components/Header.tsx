import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-indigo-600 flex justify-center items-center text-start md:text-center">
      <div className="py-14 px-6 lg:py-32 lg:px-24 ">
        <h1 className="text-white font-bold text-2xl md:text-6xl">
          IMAGINE A PLACE...
        </h1>
        <h3 className="text-white font-bold text-l mt-6 md:mt-10 md:text-xl">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <button className="bg-white text-lg rounded-full py-4 px-8 mt-6 mr-6 hover:text-indigo-400 hover:shadow-xl">
            Download for Windows
          </button>
          <button className="bg-slate-700 text-white rounded-full text-lg py-4 px-8 mt-6 hover:bg-slate-600 hover:shadow-xl">
            {" "}
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
