import React from "react";
import { motion } from "framer-motion";

const WobbleCard = ({text}) => {
  return (
    <motion.div
      className="w-64 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold"
      whileHover={{
        rotate: [0, 10, -0, 1, 0],
        transition: { duration: 0.6 },
      }}
    >
      {text}
    </motion.div>
  );
};

export default WobbleCard