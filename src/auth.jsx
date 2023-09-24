import React from "react";
import styles from "./style";
import wire_top from "./assets/wire_top.svg";
import wire_bottom from "./assets/wire_bottom.svg";
import eye from "./assets/eye.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const auth = () => {
  return (
    <div>
      <div className="flex flex-1 w-full h-full">
        <img src={wire_top} className=" absolute z-1 h-[310px] right-0 sidebar-out " />
        <img src={wire_bottom} className="left-0 absolute z-2 bottom-0 "/>
      </div>

      <div className="absolute flex-row flex flex-1 items-center">
        <img src={eye} className="mt-7 ml-7" />
        <h1
          className={`${styles.flexCenter} text-normal font-semibold mt-7 ml-2 text-[20px]`}
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
        <h5 className="absolute text-[100px] top-[15%] left-[6%] text-[#8d4d13] font-semibold ">
          WebConnect
        </h5>

        <p className=" absolute max-w-[40%] top-[33%] left-[6%] text-[30px] font-semibold sidebar-bottom">
          Join us in shaping the future of technical education & communication.
        </p>
      </div>
      <div className="absolute z-[20] w-[50%] h-[50%] bottom-20 orange__gradient" />

      <div className={`${styles.flexCenter}`}>
        <motion.div
          className={`absolute z-[25] bg-[#f3f3f3] h-[650px] w-[400px] rounded-[40px] top-[15%] right-[20%] border-2 border-orange-400 sidebar-delay-right`}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,138,76)",
          }}>
          <div className={`items-center ${styles.flexCenter} h-full`}>
            Login/Registration
          </div>
        </motion.div>
      </div>

      <div>
        <Link to="/schedule">
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

export default auth;
