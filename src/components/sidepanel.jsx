import { IoIosPeople } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Sidepanel() {
  return (
    <div
      className="absolute bottom-0 top-0 right-0 flex-col justify-between w-1/4 bg-[#EAE9E9] text-center items-center flex h-screen "
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <div className="flex justify-between w-full px-5 py-2 bg-[#F6F6F6]">
        <p>Participants</p>
        <div className=" flex text-1xl items-center rounded-3xl">
          <IoIosPeople className="text-black text-3xl" />
          <p className="ml-1 text-black mr-3">5</p>
        </div>
      </div>
      <div className="bg-[#EAE9E9] flex-col w-full justify-center text-center pl-3">
        <div className="overflow-y-auto h-36 scrollbar-white">
          <div className="flex justify-start rounded-xl w-64 h-10 m-1 bg-[#FFFFFF] p-2 items-center">
            <IoPersonCircleOutline className="text-2xl mr-2" />
            <p>Om Sarraf</p>
          </div>
          <div className="flex justify-start rounded-xl w-64 h-10 m-1 bg-[#FFFFFF] p-2 items-center">
            <IoPersonCircleOutline className="text-2xl mr-2" />
            <p>Om Sarraf</p>
          </div>
          <div className="flex justify-start rounded-xl w-64 h-10 m-1 bg-[#FFFFFF] p-2 items-center">
            <IoPersonCircleOutline className="text-2xl mr-2" />
            <p>Om Sarraf</p>
          </div>
          <div className="flex justify-start rounded-xl w-64 h-10 m-1 bg-[#FFFFFF] p-2 items-center">
            <IoPersonCircleOutline className="text-2xl mr-2" />
            <p>Om Sarraf</p>
          </div>
          <div className="flex justify-start rounded-xl w-64 h-10 m-1 bg-[#FFFFFF] p-2 items-center">
            <IoPersonCircleOutline className="text-2xl mr-2" />
            <p>Om Sarraf</p>
          </div>
        </div>
      </div>
      <div className="h-[500px] flex flex-col border shadow-md bg-white">
        <div className="flex items-center justify-between border-b p-2">
          <div className="flex items-center">
            <div className="pl-2">
              <div className="font-semibold">
                <a className="hover:underline" href="#">
                  Chat
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 py-4 overflow-y-auto">
          <div className="flex items-center mb-4">
            <div className="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                className="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" className="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>

          <div className="flex items-center flex-row-reverse mb-4">
            <div className="flex-none flex flex-col items-center space-y-1 ml-4">
              <img
                className="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" className="block text-xs hover:underline">
                Jesse
              </a>
            </div>
            <div className="flex-1 bg-indigo-100 text-gray-800 p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex-none flex flex-col items-center space-y-1 mr-4">
              <img
                className="rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <a href="#" className="block text-xs hover:underline">
                John Doe
              </a>
            </div>
            <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center border-t p-2">
          <div>
            <AiOutlineFileAdd className="text-2xl" />
          </div>

          <div className="w-full mx-2">
            <input
              className="w-full rounded-full border border-gray-200"
              type="text"
              value=""
              placeholder="Send Message"
              autoFocus
            />
          </div>

          <div>
            <FiSend className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
