import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-indigo-500 p-32 flex justify-center items-center text-center">
      <div className="w-2/3">
        <h1 className="text-white text-6xl font-bold mb-8">
          IMAGINE A PLACE...
        </h1>
        <h3 className="text-white font-bold text-base mb-6">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </h3>
        <div className="flex justify-evenly">
          <button className="bg-white rounded-full p-3">
            Download for Windows
          </button>
          <button className="bg-slate-700 text-white rounded-full p-3">
            {" "}
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
