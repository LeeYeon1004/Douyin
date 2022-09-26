import Logo from "../../../assets/img/logo.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import "./header.style.scss";
import Popper from "../popper/popper.template";
import Avt from "../../../assets/img/avt.png";
import Setting from "./setting/setting.template";
import Search from "./search/search.template";
import { useState } from "react";
function Header() {
  const [hide, setHide] = useState<Boolean>(false);
  const hideMenu = () => {
    setHide(true);
  };
  const showMenu = () => {
    setHide(false);
  };
  return (
    <div className="header-wrapper flex items-center border-solid border-b-[1px] py-[8px] justify-center">
      <div className="header-box  flex items-center max-w-[1150px] w-full">
        {/* logo */}
        <div className="logo w-[118px] cursor-pointer">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        {/* search */}
        <Search />
        {/* option */}
        <div className="upload flex items-center">
          <Tippy content="Upload">
            <button className="border-[1px] py-[6px] px-[16px] hover:bg-[#F1F1F2]">
              <i className="fa-regular fa-plus text-[20px]"></i> Upload
            </button>
          </Tippy>
          <Tippy content="Thông báo">
            <button className="relative text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-bell"></i>
            </button>
          </Tippy>
          <Tippy content="Tin nhắn">
            <button className="relative text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-comment"></i>
            </button>
          </Tippy>
          {/* menu avt */}
          <div className="avt ml-[24px]">
            <HeadlessTippy
              visible
              delay={[0, 700]}
              placement="top-end"
              interactive={true}
              offset={[12, 10]}
              render={(attrs) => (
                <div className="box min-w-[223px]" tabIndex={-1} {...attrs}>
                  <Popper>
                    <Setting hide={hide} />
                  </Popper>
                </div>
              )}
              onHidden={() => hideMenu()}
              onShow={() => showMenu()}
            >
              <img className="w-[32px] h[32px]" src={Avt} alt="" />
            </HeadlessTippy>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
