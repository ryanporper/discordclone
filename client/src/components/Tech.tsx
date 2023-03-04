import React from "react";

const Tech = () => {
  return (
    <div className="bg-neutral-100 flex justify-center items-center text-start lg:text-center">
      <div className="flex flex-col py-14 px-6 lg:py-32 lg:px-24">
        <h1 className="text-xl lg:text-4xl font-bold">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <h3 className="text-base lg:text-xl mt-5">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </h3>
        <div className=" h-80 w-full bg-yellow-400 my-10 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <h4 className="text-3xl font-bold">Ready to start your journey?</h4>
        <div>
          <button className=" bg-indigo-500 hover:bg-indigo-400 text-white text-xl rounded-full mt-10 py-4 px-8">
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tech;
