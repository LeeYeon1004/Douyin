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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotifyIcon } from "../icons/notify.icon";
import { MessageIcon } from "../icons/message.icon";
function Header() {
  const [hide, setHide] = useState<Boolean>(false);
  const hideMenu = () => {
    setHide(true);
  };
  const showMenu = () => {
    setHide(false);
  };
  return (
    <div className="flex items-center pl-[20px] pr-[24px]">
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
          <button className="border-[1px] font-semibold leading-[24px] text-[#161823] py-[6px] px-[16px] hover:bg-[#F1F1F2]">
            <FontAwesomeIcon icon={faPlus} /> Upload
          </button>
        </Tippy>
        <Tippy content="Tin nhắn">
          <button className="relative text-[20px] ml-[16px] cursor-pointer w-[26px] h-[26px]">
            <MessageIcon />
          </button>
        </Tippy>
        <Tippy content="Thông báo">
          <button className="relative text-[20px] ml-[16px] cursor-pointer">
            <NotifyIcon />
          </button>
        </Tippy>
        {/* menu avt */}
        <div className="avt ml-[16px]">
          <HeadlessTippy
            delay={[0, 700]}
            hideOnClick={false}
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
  );
}
export default Header;
