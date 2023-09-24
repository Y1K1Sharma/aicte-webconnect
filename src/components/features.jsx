import React from "react";
import styles from "../style";
import pic1 from "../assets/blockchain.svg";
import rec2 from "../assets/rec2.svg";
import stars from "../assets/stars.svg";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="flex-row justify-between justify-space ">
      <div className="flex justify-between justify-around mt-[60%]">
        <motion.div whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,138,76)",
            }}
          className={`z-[25] border-orange-400 border-2 py-10 px-10 rounded-full flex items-center justify-center`}
        >
          <img src={pic1} className="h-32 w-32" />
        </motion.div>

        <motion.div whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,138,76)",
            }}
          className={`z-[25] border-orange-400 border-2 py-10 px-10 rounded-full flex items-center justify-center`}
        >
          <img src={rec2} className="h-32 w-32" />
        </motion.div>
        <motion.div whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,138,76)",
            }}
          className={`z-[25] border-orange-400 border-2 py-10 px-10 rounded-full flex items-center justify-center`}
        >
          <img src={stars} className="h-32 w-32" />
        </motion.div>
      </div>

      <div className="flex justify-between justify-around mb-10 mt-5">
        <motion.div className="text-center max-w-[180px]" whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px rgb(255,138,76)",
            }}>
          <h3 className={`text-[#ffa222] text-[30px]`}>Enhanced Security</h3>
        </motion.div>

        <motion.div className="text-center max-w-[180px]" whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px rgb(255,138,76)",
            }} >
          <h3 className="text-[#ffa222] text-[30px]">Real Time Conferencing</h3>
        </motion.div>

        <motion.div className="text-center max-w-[180px]" whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px rgb(255,138,76)",
            }}>
          <h3 className="text-[#ffa222] text-[30px]">AI Features</h3>
        </motion.div>
      </div>

      
    </div>
  );
};

export default Features;
