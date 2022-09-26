import "./search.style.scss";
import { useState } from "react";
function Search() {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const showIcon = () => {
    setShow(true);
  };
  const closeIcon = () => {
    setValue("");
    setShow(false);
  };
  return (
    <>
      <div className="flex-1 relative">
        <div className="flex justify-center z-[1]">
          <div className="search-box flex justify-center rounded-[90px] relative">
            <input
              className="input-search bg-[#F1F1F2] outline-none px-[16px] py-[12px] w-[302px]"
              type="text"
              value={value}
              placeholder="Tìm kiếm"
              onClick={showIcon}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              onClick={closeIcon}
              className={`close-text text-[#b5b5b9] h-[48px] px-[4px] absolute z-[2] right-[16%] ${
                show ? "" : "hidden"
              }`}
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>

            <button className="btn-search text-[#ababaf] bg-[#F1F1F2] py-[12px] px-[16px] w-[52px]">
              <i className="ti-search"></i>
            </button>
          </div>
        </div>
        {/* result search */}
      </div>
    </>
  );
}

export default Search;
