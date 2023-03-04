import React from "react";

const Tech = () => {
  return (
    <div className="w-full bg-neutral-100  p-32 flex justify-center items-center text-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">RELIABLE TECH FOR STAYING CLOSE</h1>
        <h3 className="text-base mt-5">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </h3>
        <div className=" h-80 w-full bg-yellow-400 my-20 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <h4 className="text-3xl font-bold">Ready to start your journey?</h4>
        <div>
          <button className=" bg-indigo-400 hover:bg-indigo-300 text-white text-lg rounded-full mt-6 p-3">
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tech;
