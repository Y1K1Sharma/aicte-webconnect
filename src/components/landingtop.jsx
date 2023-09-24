import React from "react";
import styles from "../style";
import wire_top from "../assets/wire_top.svg";
import wire_bottom from "../assets/wire_bottom.svg";
import eye from "../assets/eye.svg";
import comp from "../assets/comp4.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landingtop = () => {
  return (
    <div className="w-full h-full flex-1 flex ">
      <div className="flex flex-1 w-full h-full">
        <img src={wire_top} className=" absolute z-1 right-0 sidebar-right" />
        <img src={wire_bottom} className="left-0 absolute z-2 bottom-0 sidebar-left" />
      </div>

      <div className="absolute flex-row flex flex-1 items-center">
        <img src={eye} className="mt-7 ml-7" />
        <h1
          className={`${styles.flexCenter} text-normal font-semibold mt-7 ml-2 text-[20px] `}
        >
          AICTE
        </h1>
      </div>
      <div className="absolute flex-row flex flex-1 items-center right-0">
        <h2
          className={`${styles.flexCenter} z-[20] text-normal font-semibold mt-7 mr-6 text-[20px]`}
        >
          Support
        </h2>
        <h3
          className={`${styles.flexCenter} z-[20] text-normal font-semibold mt-7 mr-10 text-[20px]`}
        >
          Docs
        </h3>
      </div>

      <div>
        <h5 className="absolute text-[100px] top-[15%] left-[6%] text-[#8d4d13] font-semibold sidebar drop-shadow-md">
          WebConnect
        </h5>

        <img src={comp} className="absolute right-0 top-[37%] h-4/5 sidebar" />
        <p className=" absolute max-w-[40%] top-[33%] left-[6%] text-[20px] font-semibold sidebar">
          Tailored for Excellence. Embrace secure, AI-powered meetings designed
          exclusively for AICTE's needs. Elevate collaboration beyond
          conventional web conferencing.
        </p>
      </div>
      <div className="absolute z-[20] w-[50%] h-[50%] bottom-20 orange__gradient" />
      <div>
        <Link to="/auth">
          <motion.button
            className="z-[100] absolute top-[50%] left-[19%] rounded-full py-2 px-5 border-2 border-orange-400 text-black  font-semibold sidebar"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,138,76)",
            }}
          >
            Get Started !
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Landingtop;
