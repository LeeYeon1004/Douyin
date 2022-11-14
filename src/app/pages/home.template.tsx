import { Outlet } from "react-router-dom";
import Header from "../core/components/headers/header.template";
import Sidebar from "../core/components/sidebars/sidebar.template";
import Loading from "../core/shares/loading/loading.template";

function Home() {
  return (
    <div className="select-none">
      <Loading />
      <div className="header-wrapper flex items-center border-solid border-b-[1px] justify-center">
        <div className="max-w-[1150px] w-full">
          <Header />
        </div>
      </div>
      <div className="max-w-[1150px] flex justify-between m-[auto] relative">
        <div className="">
          <Sidebar width="max-w-[356px]" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default Home;
