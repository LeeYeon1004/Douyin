import "./search.style.scss";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "../../icons/search.icon";
import { getUser } from "../../../services/api.config";
import { User } from "../../../models/users.interface";
function Search() {
  const [iconClose, setIconClose] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUser] = useState<User[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleGetUser();
    document.addEventListener("click", (e) => handleClickOutside(e), true);
  }, []);
  const handleGetUser = async () => {
    const userItem = await getUser();
    setUser(userItem);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (!clickRef.current?.contains(e.target as Node)) {
      setShowResult(false);
    }
  };

  useEffect(() => {
    if (valueInput === "") {
      setIconClose(false);
      setShowResult(false);
    } else {
      setIconClose(true);
    }
  }, [valueInput]);
  const closeIcon = () => {
    setValueInput("");
    setIconClose(false);
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex-1 relative">
        <div className="flex justify-center ">
          <div
            ref={clickRef}
            className="search-box flex justify-center items-center rounded-[90px] relative text-[14px] min-w-[361px]"
          >
            <input
              ref={inputRef}
              className="input-search bg-[#F1F1F2] text-[#161823] outline-none w-[302px] text-[16px] leading-[22px] pl-[16px] py-[10px]"
              type="text"
              value={valueInput}
              placeholder="Tìm kiếm"
              onChange={(e) => setValueInput(e.target.value)}
              onFocus={() => setShowResult(true)}
            />
            <span className="seperate"></span>
            <button
              onClick={closeIcon}
              className={`text-[#b5b5b9] h-[48px] px-[4px] absolute right-[16%] ${
                iconClose ? "" : "hidden"
              }`}
            >
              {!!users && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
              {loading && (
                <FontAwesomeIcon className="spinnerIcon" icon={faSpinner} />
              )}
            </button>

            <button className="btn-search text-[#ababaf] bg-[#F1F1F2] pl-[12px] pr-[16px] py-[10px]">
              <div className="w-[24px]">
                <SearchIcon />
              </div>
            </button>
            {/* result search */}
            <div
              className={`result-search pt-[8px] rounded-[8px] ${
                users.length > 0 && showResult ? "block" : "hidden"
              }`}
            >
              <div className="flex items-center py-[9px] px-[16px]">
                <div className="w-[15px] h-[15px] mr-[10px]">
                  <SearchIcon />
                </div>
                <h4 className="flex-[1] text-[16px] text-[#161823] leading-[22px] font-semibold">
                  kết quả
                </h4>
              </div>
              <div className="px-[12px]">
                <h3 className="py-[5px] font-semibold text-[#16182380] text-[14px]">
                  Tài khoản
                </h3>
                <div className="">
                  {users.map((item, index) => (
                    <div key={index} className="acc-item flex py-[9px]">
                      <div className="mr-[12px]">
                        <img
                          className="w-[40px] h-[40px] rounded-[50%]"
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="text-[16px] text-[#161823] leading-[22px] font-semibold">
                          {item.fullName}
                        </h4>
                        <p className="text-[14px] text-[#16182380] leading-[20px] font-normal">
                          {item.username}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
