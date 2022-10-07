import { Outlet } from "react-router-dom";
import Header from "../core/components/headers/header.template";
import Sidebar from "../core/components/sidebars/sidebar.template";

function Home() {
  return (
    <div className="select-none">
      <div className="header-wrapper flex items-center border-solid border-b-[1px] py-[8px] justify-center">
        <div className="max-w-[1150px] w-full">
          <Header />
        </div>
      </div>
      <div className="max-w-[1150px] flex justify-between m-[auto] mt-[60px] relative">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
export default Home;
