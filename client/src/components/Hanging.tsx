import React from "react";

const Hanging = () => {
  return (
    <div className="bg-neutral-100 flex justify-center items-center text-start">
      <div className="flex flex-col lg:flex-row lg:justify-center py-14 px-6 lg:py-32 lg:px-24">
        <div className=" h-80 w-full bg-red-600 lg:mr-20 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <div className="w-full">
          <h2 className="text-xl lg:text-5xl font-bold my-6">
            Where hanging out is easy
          </h2>
          <p className="text-lg lg:text-xl">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hanging;
