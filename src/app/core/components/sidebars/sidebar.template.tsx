import "./sidebar.style.scss";
import { useEffect, useState } from "react";
import { navSidebar } from "../configs/sidebar.config";
import { User } from "../../models/users.interface";
import { getUser } from "../../services/api.config";
import { CheckIcon } from "../icons/check.icon";
import { Hashtag } from "../configs/hashtag.config";

function Sidebar() {
  const [isActive, setIsActive] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [newUsers, setNewUsers] = useState<User[]>([]);
  const [showMore, setShowMore] = useState(false);
  // call api
  useEffect(() => {
    handleGetUser();
  }, []);
  const handleGetUser = async () => {
    const userItem = await getUser();
    setUsers(userItem);
    setNewUsers(userItem.slice(0, 5));
  };
  // -----
  const showFull = () => {
    setNewUsers(users);
    setShowMore(true);
  };
  const showLess = () => {
    setNewUsers(users.slice(0, 5));
    setShowMore(false);
  };

  const handleActive = (index: number) => {
    setIsActive(index);
  };
  return (
    <div className="max-w-[356px] w-full relative">
      <div className="sidebar-box">
        <div className="w-full border-b-[1px]">
          <ul className="flex flex-col text-left font-bold mb-[12px]">
            {navSidebar.map((item, index) => (
              <li
                key={index}
                onClick={() => handleActive(index)}
                className={`flex leading-[32px] p-[8px] text-[18px] text-[#161823] hover:bg-[#f8f8f8] cursor-pointer ${
                  isActive === index && "active"
                }`}
              >
                <div className="w-[32px]">{item.svg}</div>
                <p className="ml-[8px]">{item.option}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* offer account */}
        <div className="font-medium border-b-[1px]">
          <div className="my-[12px]">
            <h3 className="text-[14px] text-[#161823bf] font-semibold">
              Tài khoản được đề xuất
            </h3>
            {newUsers.map((item, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-[#f8f8f8] hover:cursor-pointer p-[8px] animation"
              >
                <div className="avatar w-[32px] h-[32px] mr-[12px]">
                  <img className="rounded-[50%]" src={item.avatar} alt="" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="mr-[4px]">{item.username}</h3>
                    <CheckIcon />
                  </div>
                  <p className="text-[12px] text-[#161823bf]">
                    {item.fullName}
                  </p>
                </div>
              </div>
            ))}
            {showMore ? (
              <button
                onClick={showLess}
                className="text-[#fe2c55] text-[14px] font-bold mt-[8px] ml-[8px]"
              >
                Ẩn bớt
              </button>
            ) : (
              <button
                onClick={showFull}
                className="text-[#fe2c55] text-[14px] font-bold mt-[8px] ml-[8px]"
              >
                Xem thêm
              </button>
            )}
          </div>
        </div>
        {/* explorer */}
        <div className="mb-[12px]">
          <h3 className="my-[12px] text-[14px] text-[#161823bf] font-semibold">
            Khám phá
          </h3>
          <div className="flex flex-wrap">
            {Hashtag.map((item, index) => (
              <div key={index} className="hashtagItem w-fit mr-[8px]">
                <button className="flex items-center rounded-[12px] mb-[12px] border-[1px] border-solid py-[3px] px-[10px] hover:bg-[#16182308]">
                  <span className="text-[#161823]">{item.icon}</span>
                  <p className="text-[#161823bf] text-[14px] leading-[18px] ml-[6px]">
                    {item.tagContent}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
