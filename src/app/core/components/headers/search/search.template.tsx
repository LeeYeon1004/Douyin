import "./search.style.scss";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "../../icons/search.icon";
import { getUser } from "../../../services/api.config";
import { User } from "../../../models/users.interface";
import { CheckIcon } from "../../icons/check.icon";
import { Link } from "react-router-dom";
// import useDebounce from "../../../hooksCustom/useDebounce";

function Search() {
  const [iconClose, setIconClose] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUser] = useState<User[]>([]);
  const [newUsers, setNewUsers] = useState<User[]>(users);
  const inputRef = useRef<HTMLInputElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);
  // const debounced = useDebounce(valueInput, 600);

  useEffect(() => {
    handleGetUser();
    setLoading(true);
    document.addEventListener("click", (e) => handleClickOutside(e), true);
  }, []);
  const handleGetUser = async () => {
    setLoading(true);
    const userItem = await getUser();
    setUser(userItem);
    setLoading(false);
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
      setShowResult(true);
    }
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);
  const closeIcon = () => {
    setValueInput("");
    setIconClose(false);
    inputRef.current?.focus();
  };

  // search
  const handleSearch = () => {
    setNewUsers(
      users.filter((item) =>
        item.fullName.toLowerCase().includes(valueInput.toLowerCase())
      )
    );
  };
  const handleKey = (e: { key: string }) => {
    if (e.key === "enter") {
      handleSearch();
    }
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
              onChange={(e) => {
                setValueInput(e.target.value);
              }}
              onKeyDown={handleKey}
            />
            <span className="seperate"></span>
            <button
              onClick={closeIcon}
              className={`text-[#b5b5b9] h-[48px] px-[4px] absolute right-[16%] ${
                iconClose ? "" : "hidden"
              }`}
            >
              {!!newUsers && !loading && (
                <FontAwesomeIcon icon={faCircleXmark} />
              )}
              {loading && (
                <FontAwesomeIcon className="spinnerIcon" icon={faSpinner} />
              )}
            </button>

            <button
              onClick={handleSearch}
              className="btn-search text-[#ababaf] bg-[#F1F1F2] pl-[12px] pr-[16px] py-[10px]"
            >
              <div className="w-[24px]">
                <SearchIcon />
              </div>
            </button>
            {/* result search */}
            <div
              className={`result-search pt-[8px] rounded-[8px] ${
                newUsers.length > 0 && showResult ? "block" : "hidden"
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
              <div className="">
                <h3 className="py-[5px] px-[12px] font-semibold text-[#16182380] text-[14px]">
                  Tài khoản
                </h3>
                <div className="">
                  {newUsers.map((item, index) => (
                    <Link
                      to={`/${item.username}`}
                      key={index}
                      className="flex py-[9px] px-[12px] hover:bg-[#16182308]"
                    >
                      <div className="mr-[12px]">
                        <img
                          className="w-[40px] h-[40px] rounded-[50%]"
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-[16px] text-[#161823] leading-[22px] font-semibold">
                            {item.fullName}
                          </h4>
                          <div className="ml-[8px]">
                            <CheckIcon />
                          </div>
                        </div>
                        <p className="text-[14px] text-[#16182380] leading-[20px] font-normal">
                          {item.username}
                        </p>
                      </div>
                    </Link>
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
