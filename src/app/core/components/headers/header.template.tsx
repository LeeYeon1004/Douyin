import { useEffect, useState } from "react";
import Logo from "../../../assets/img/logo.png";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "./header.style.scss";
import Popper from "../popper/popper.template";
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
      setSearchResult([1, 2]);
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
                <Popper>
                  <div className="haedless" tabIndex={-1} {...attrs}>
                    Kết quả
                  </div>
                </Popper>
              )}
            >
              <div className="search-box flex justify-center rounded-[90px] input-search relative">
                <input
                  className="input-search bg-[#F1F1F2] outline-none px-[16px] py-[12px] w-[300px]"
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
          {/* result search */}
          <ul className="bg-white hidden rounded-[4px] shadowSearch p-[16px] absolute left-[29%] top-[118%] w-[356px]">
            <li className="flex items-center">
              <i className="ti-search text-[12px] mr-[12px] text-[#000]"></i>
              Iphone 14 pro
            </li>
          </ul>
        </div>
        {/* option */}
        <div className="upload flex items-center">
          <button className="border-[1px] py-[6px] px-[16px] hover:bg-[#F1F1F2]">
            <i className="fa-regular fa-plus text-[20px]"></i> Upload
          </button>
          <Tippy content="Thông báo" placement="bottom">
            <div className=" group relative text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-bell"></i>
            </div>
          </Tippy>
          <Tippy content="Tin nhắn">
            <div className=" group relative text-[20px] ml-[24px] cursor-pointer">
              <i className="ti-comment"></i>
            </div>
          </Tippy>
        </div>
      </div>
    </div>
  );
}
export default Header;
