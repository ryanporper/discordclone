import React from "react";

const Invite = () => {
  return (
    <div className="bg-white p-32 flex justify-center items-center text-start">
      <div className="flex items-center">
        <div className=" h-72 w-full bg-slate-600 mr-20 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <div className="w-full">
          <h2 className="text-5xl font-bold mb-4">
            Create an invite-only place where you belong
          </h2>
          <p className="text-xl">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invite;
