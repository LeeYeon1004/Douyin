import "./search.style.scss";
import Avt from "../../../../assets/img/avt.png";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Popper from "../../popper/popper.template";
function Search() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 2000);
  }, []);
  const handleShowIcon = () => {
    setShowIcon(true);
  };
  const closeIcon = () => {
    setValue("");
    setShowIcon(false);
  };
  const [searchResult, setSearchResult] = useState<number[]>([]);
  return (
    <>
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
                  <div className="py-[9px] px-[16px] hover:bg-[#16182308]">
                    <div className="flex items-center cursor-pointer">
                      <img
                        className="w-[40px] h-[40px] mr-[12px]"
                        src={Avt}
                        alt=""
                      />
                      <div className="info">
                        <h4 className="name font-semibold text-[16px]">
                          Họ và tên
                        </h4>
                        <p className="username text-[14px] text-[#16182380]">
                          username
                        </p>
                      </div>
                    </div>
                  </div>
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
    </>
  );
}

export default Search;
