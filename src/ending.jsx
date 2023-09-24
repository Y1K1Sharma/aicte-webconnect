// import React from "react";
import wire_top from "./assets/wire_top.svg";
import wire_bottom from "./assets/wire_bottom.svg";
import eye from "./assets/eye.svg";
import styles from "./style";
// import profile from "./assets/profile_icon.svg";

const Ending = () => {
  return (
    <div className="w-full h-full flex-1 flex">
      <div className="flex flex-1 w-full h-full">
        <img src={wire_top} className=" absolute z-1 h-[310px] right-0" />
        <img src={wire_bottom} className="left-0 absolute z-2 bottom-10" />
      </div>

      <div className="absolute flex-row flex flex-1 items-center">
        <img src={eye} className="mt-7 ml-7" />
        <h1
          className={`${styles.flexCenter} text-normal font-semibold mt-7 ml-2 text-[20px]`}
        >
          VCA
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

      <div
        className={`absolute z-[2] bg-gray-300 opacity-60 h-[500px] w-[900px] rounded-[40px] top-[25%] left-[25%] `}
      ></div>
      <div
        className={`z-[50] absolute top-[35%] left-[39%] text-[40px] items-center justify-center `}
      >
        You Left the Meeting
      </div>

      {/* <div className={`absolute  items-center justify-between sidebar`}>
        <button className=" absolute top-[55%] left-[39%] rounded-full py-2 px-5 border-2 border-orange-500 text-black ">
          Click me
        </button>

        <button className="top-[55%] left-[39%] rounded-full py-2 px-4 border-2 border-orange-500 text-black ">
          Click me
        </button>
      </div> */}
    </div>
  );
};

export default Ending;
