import React from "react";
import wave1 from "./assets/wave1.svg";
import wave2 from "./assets/wave2.svg";
import wire_top from "./assets/wire_top.svg";
import wire_bottom from "./assets/wire_bottom.svg";
import styles from "./style";
// import { Button } from "@nextui-org/react";


const App = () => {
  return (
    <div className="w-full h-full flex-1 flex">
      <img src={wave1} className="bottom-0 absolute right-0 w-full" />
      <img src={wave2} className="bottom-0 absolute right-0 w-full" />

      <div className="flex flex-1 w-full h-full">
        <div className={` w-full absolute ${styles.flexCenter} mt-[18%] `}>
          <div
            className={`${styles.flexCenter} font-semibold xs:text-[180px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] self-center items-center z-50 `}
          >
            <h10 >WebConnect</h10>
          </div>
          <div
            className={`w-full absolute ${styles.flexCenter} mt-[15%] font-medium text-[40px] z-[60]`}
          >
            Where Vision meets Security
          </div>
          <div
            className={`w-full absolute ${styles.flexCenter} mt-[25%] font-medium text-[40px] z-[60]`}
          >

            {/* <Button color="primary" variant="ghost" className="h-[50px] w-[200px] text-medium text-[23px]">
              Get Started
            </Button> */}
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full h-full">
        <img src={wire_top} className=" absolute z-10 h-[280px] ml-20"/>
        <img src={wire_bottom} className="left-0 absolute z-20 bottom-10"/>
      </div>
      
    </div>
  );
};

export default App;
