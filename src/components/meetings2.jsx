import { AiFillCheckCircle } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import calender from "../assets/calender.png";
import wire_top from "../assets/wire_top.svg";
import wire_bottom from "../assets/wire_bottom.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Meetings() {
  return (
    <div className="relative flex flex-1 h-screen">
      <img
        src={wire_top}
        className="absolute top-0 w-1/2 right-0 sidebar-right"
      />
      <img src={wire_bottom} className="absolute bottom-0 w-1/2 " />

      <div className="flex items-center justify-center w-full h-screen backdrop-blur-none backdrop-filter">
        <div className="flex flex-col items-center w-1/3 rounded-3xl p-8 text-4xl">
          <BiCalendar className="text-black text-4xl" />
          <p className="text-gray-300 text-5xl mt-2">|</p>
          <p className="text-black text-xl mt-2">24/09/2023</p>
          <AiFillCheckCircle className="text-orange-500 text-xl mt-3" />

          <div className="flex justify-center mt-5">
            <img
              src={calender}
              className="w-64 rounded-2xl"
              alt=""
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            />
          </div>

          <motion.button className="z-[10] bg-blue-600 text-white font-bold text-xl mt-6 px-6 py-2 rounded-full "
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(28,100,242)",
          }}>
            Schedule Meet !
          </motion.button>
        </div>

        <div
          className="flex flex-col items-center w-1/2 rounded-3xl p-8 mt-10"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
          }}
        >
          <p className="text-black text-4xl mt-8 mb-4">Join Meeting</p>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-md bg-white text-black"
            />
            <input
              type="text"
              placeholder="Meeting ID"
              className="input input-bordered input-md bg-white text-black"
            />
          </div>
          <motion.div className="z-[23]">
            <Link to="/preview">
              <motion.button
                className="z-[80] mt-6 rounded-full py-2 px-6 border-2 bg-blue-600 text-white  font-semibold sidebar"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(28,100,242)",
                }}
              >
                Get Started !
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute z-[6] w-[50%] h-[50%] bottom-20 orange__gradient" />
      </div>
    </div>
  );
}
