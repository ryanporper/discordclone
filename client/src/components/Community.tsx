import React from "react";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
      className="bg-white flex justify-center items-center text-start"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center py-14 px-6 lg:py-32 lg:px-24">
        <div className=" h-72 w-full bg-green-600 lg:mr-20 rounded-2xl flex items-center justify-center">
          Img
        </div>
        <div className="w-full">
          <h2 className="text-xl lg:text-5xl font-bold my-6 ">
            From few to a fandom
          </h2>
          <p className="text-lg lg:text-xl">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;
