import Logo from "../../../assets/img/logo.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import "./header.style.scss";
import Popper from "../popper/popper.template";
import Avt from "../../../assets/img/avt.png";
import Setting from "./setting/setting.template";
import Language from "./setting/menu-language/language.template";
import Search from "./search/search.template";
function Header() {
  const onBack = () => {};
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
              visible
              delay={[0, 700]}
              placement="top-end"
              interactive={true}
              render={(attrs) => (
                <div className="box min-w-[223px]" tabIndex={-1} {...attrs}>
                  <Popper>
                    <Language title="Ngôn ngữ" onBack={onBack} />
                    <Setting />
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
