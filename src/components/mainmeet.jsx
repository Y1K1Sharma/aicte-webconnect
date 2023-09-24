import Sidebar from "./sidebar"; // Make sure the filename is "sidebar.js" or "sidebar.jsx" based on your project setup
import Grid from "./grid";
import Sidepanel from "./sidepanel";

export default function Mainmeet() {
  return (
    <>
      <div className="flex h-screen -ml-8 bg-[#EAE9E9] p-2">
        <Sidebar />
        <Grid />
        <Sidepanel />
      </div>
    </>
  );
}
