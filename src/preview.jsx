// import React from "react";
import eye from "./assets/eye.svg";
import wire_top from "./assets/wire_top.svg";
import wire_bottom from "./assets/wire_bottom.svg";
import styles from "./style";
import profile from "./assets/profile_icon.svg";
import { LuLink2 } from "react-icons/lu";
import { ImPlus } from "react-icons/im";
import rec from "./assets/camera2.svg";
import mic from "./assets/mic2.svg";
import settings from "./assets/settings2.svg";

const preview = () => {
  return (
    <div className="w-full h-full flex-1 flex ">
      <div className="flex flex-1 w-full h-full">
        <img src={wire_top} className=" absolute z-10 h-[310px] right-0" />
        <img src={wire_bottom} className="left-0 absolute z-20 bottom-10" />
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
          18:32
        </h2>
        <h3
          className={`${styles.flexCenter} z-[20] text-normal font-semibold mt-7 mr-10 text-[20px]`}
        >
          Thursday, 21st September
        </h3>
      </div>

      <div>
        <div
          className={`z-[10] absolute h-[90px] w-[20px] bg-gray-300 rounded-[40px] top-[12%] left-[25%]`}
        />

        <h4
          className={`absolute top-[12%] left-[28%] text-[36px] font-semibold sidebar-left-20`}
        >
          Join Virtual Meeting
        </h4>

        <LuLink2
          className={`absolute top-[14%] left-[46%] bg-[#43e447] rounded-[20px] p-1 h-[30px] w-[30px] text-white text-medium`}
        />
      </div>


      <div className={`${styles.flexCenter}`}>
        <div
          className={`absolute z-[25] bg-black h-[450px] w-[900px] rounded-[40px] top-[25%] left-[25%] `}
        >
          <div className={`items-center ${styles.flexCenter} h-full`}>
            <img src={profile} className={`h-[120px] w-[120px]`} />
            <h4 className=" absolute text-white mt-60 text-[20px] font-semibold">
              Person
            </h4>
          </div>
        </div>
      </div>
      <div
        className={`z-[30] absolute flex-1 bg-[#e8e8e8] top-[79%] left-[31%] justify-between rounded-[25px] ${styles.flexCenter} sidebar`}
      >
        <div className="pt-5 pl-32 pb-5">
          <img src={rec} className={`bg-white p-3 rounded-[13px]`} />
        </div>
        <div className="pt-5 pl-32 pb-5">
          <img src={mic} className={`bg-white p-3 rounded-[13px]`} />
        </div>
        <div className="pt-5 pl-36 pr-32 pb-5">
          <img src={settings} className={`bg-white p-3 rounded-[13px]`} />
        </div>
      </div>
    </div>
  );
};

export default preview;
