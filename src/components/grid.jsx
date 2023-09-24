import frame from "../assets/frame.jpeg";
import { BsArrowsFullscreen } from "react-icons/bs";
import { RiVoiceprintFill } from "react-icons/ri";
export default function Grid() {
  return (
    <div className="flex flex-wrap m-auto -ml-7">
      <div className="w-1/2">
        <div className="relative">
          <img src={frame} alt="" className="rounded-lg m-3 w-96 h-auto" />
          <div className="absolute left-8 bottom-5">Name</div>
          <BsArrowsFullscreen className="text-white absolute top-5 right-9" />
          <RiVoiceprintFill className="absolute bottom-5 right-9" />
        </div>
        <div className="relative">
          <img src={frame} alt="" className="rounded-lg m-3 w-96 h-auto" />
          <div className="absolute left-8 bottom-5">Name</div>
          <BsArrowsFullscreen className="text-white absolute top-5 right-9" />
          <RiVoiceprintFill className="absolute bottom-5 right-9" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative">
          <img src={frame} alt="" className="rounded-lg m-3 w-96 h-auto" />
          <div className="absolute left-8 bottom-5">Name</div>
          <BsArrowsFullscreen className="text-white absolute top-5 right-9" />
          <RiVoiceprintFill className="absolute bottom-5 right-9" />
        </div>
        <div className="relative">
          <img src={frame} alt="" className="rounded-lg m-3 w-96 h-auto" />
          <div className="absolute left-8 bottom-5">Name</div>
          <BsArrowsFullscreen className="text-white absolute top-5 right-9" />
          <RiVoiceprintFill className="absolute bottom-5 right-9" />
        </div>
      </div>
    </div>
  );
}
