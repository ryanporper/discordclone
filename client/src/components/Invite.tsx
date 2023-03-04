import React from "react";

const Invite = () => {
  return (
    <div className="w-full bg-white p-32 flex justify-center items-center text-start">
      <div className="flex w-full">
        <div className=" h-80 w-full bg-slate-600 mr-20 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">
            Create an invite-only place where you belong
          </h2>
          <p>
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
