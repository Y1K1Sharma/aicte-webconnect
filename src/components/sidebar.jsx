import { BsFillRecordCircleFill } from "react-icons/bs";
import { MdOutlineScreenShare } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { BsChatSquareDots } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

export default function Sidebar() {
  // Define click handlers for each button here, or leave them empty if you don't need any actions.
  const handleRecordClick = () => {
    // Handle the click event for the record button here.
  };

  const handleScreenShareClick = () => {
    // Handle the click event for the screen share button here.
  };

  const handleMicClick = () => {
    // Handle the click event for the mic button here.
  };

  const handleCameraClick = () => {
    // Handle the click event for the camera button here.
  };

  const handleSettingsClick = () => {
    // Handle the click event for the settings button here.
  };

  const handleChatClick = () => {
    // Handle the click event for the chat button here.
  };

  const handleAccountClick = () => {
    // Handle the click event for the account button here.
  };

  return (
    <div className="text-2xl p-10">
      <div
        className="bg-[#f1efef] w-fit p-2 rounded-2xl flex flex-col items-center h-fit gap-48"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <div className="flex flex-col gap-[2px]">
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleRecordClick}
          >
            <BsFillRecordCircleFill className="text-[#FF9431]" />
          </button>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleScreenShareClick}
          >
            <MdOutlineScreenShare className="text-[#FF9431]" />
          </button>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleMicClick}
          >
            <BsFillMicFill className="text-[#FF9431]" />
          </button>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleCameraClick}
          >
            <BsFillCameraVideoFill className="text-[#FF9431]" />
          </button>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleSettingsClick}
          >
            <IoSettingsSharp className="text-[#FF9431]" />
          </button>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleChatClick}
          >
            <BsChatSquareDots className="text-[#FF9431]" />
          </button>
        </div>
        <div>
          <button
            className="rounded-full bg-white p-2 m-2"
            onClick={handleAccountClick}
          >
            <MdAccountCircle className="text-[#FF9431]" />
          </button>
        </div>
      </div>
    </div>
  );
}
