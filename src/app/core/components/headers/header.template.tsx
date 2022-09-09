import { useEffect, useState } from "react";
import Logo from "../../../assets/img/logo.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import "./header.style.scss";
import Popper from "../popper/popper.template";
import ResultSearch from "./resultSearch/resultSearch.template";
import Avt from "../../../assets/img/avt.png";
import MenuAvt from "./menuAvt/menuAvt.template";
function Header() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const handleShowIcon = () => {
    setShowIcon(true);
  };
  const closeIcon = () => {
    setValue("");
    setShowIcon(false);
  };
  const [searchResult, setSearchResult] = useState<number[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);
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
        <div className="flex-1 relative">
          <div className="flex justify-center z-[1]">
            <HeadlessTippy
              visible={searchResult.length > 0}
              interactive={true} // active bên trong thẻ tippy
              render={(attrs) => (
                <div className="haedless" tabIndex={-1} {...attrs}>
                  <Popper>
                    <h3 className="text-[14px] text-[#16182380] font-semibold ml-[16px]">
                      Account
                    </h3>
                    <ResultSearch />
                  </Popper>
                </div>
              )}
            >
              <div className="search-box flex justify-center rounded-[90px] relative">
                <input
                  className="input-search bg-[#F1F1F2] outline-none px-[16px] py-[12px] w-[302px]"
                  type="text"
                  value={value}
                  placeholder="Tìm kiếm"
                  onClick={handleShowIcon}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  onClick={closeIcon}
                  className={`close-text text-[#b5b5b9] h-[48px] px-[4px] absolute z-[2] right-[16%] ${
                    showIcon ? "" : "hidden"
                  }`}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>

                <button className="btn-search text-[#ababaf] bg-[#F1F1F2] py-[12px] px-[16px] w-[52px]">
                  <i className="ti-search"></i>
                </button>
              </div>
            </HeadlessTippy>
          </div>
        </div>
        {/* option */}
        <div className="upload flex items-center">
          <button className="border-[1px] py-[6px] px-[16px] hover:bg-[#F1F1F2]">
            <i className="fa-regular fa-plus text-[20px]"></i> Upload
          </button>
          <Tippy content="Thông báo" placement="bottom">
            <div className="text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-bell"></i>
            </div>
          </Tippy>
          <Tippy content="Tin nhắn">
            <div className="text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-comment"></i>
            </div>
          </Tippy>
          {/* menu avt */}
          <div className="avt ml-[24px]">
            <HeadlessTippy
              delay={[0, 700]}
              placement="top-end"
              interactive={true}
              render={(attrs) => (
                <div className="box min-w-[223px]" tabIndex={-1} {...attrs}>
                  <Popper>
                    <MenuAvt />
                  </Popper>
                </div>
              )}
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
