import Header from "../core/components/headers/header.template";
import Info from "../core/components/infoAcc/info.template";
import Sidebar from "../core/components/sidebars/sidebar.template";

function Profile() {
  return (
    <div className="select-none">
      <div className="header-wrapper border-solid border-b-[1px]">
        <Header />
      </div>
      <div className="w-full flex m-[auto] mt-[60px] relative">
        <div className="max-w-[240px] w-full">
          <Sidebar width="max-w-[240px]" />
        </div>
        {/* <Outlet /> */}
        <div className="">
          <div className="max-h-[269px] mb-[20px]">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
