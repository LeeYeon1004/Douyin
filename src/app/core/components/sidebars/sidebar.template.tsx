import "./sidebar.style.scss";
import { useEffect, useState } from "react";
import { navSidebar } from "../../services/configs/sidebar.config";
import { CheckIcon } from "../../shares/icons/check.icon";
import { Hashtag } from "../../services/configs/hashtag.config";
import { copyright } from "../../services/configs/copyright.config";
import { adv } from "../../services/configs/adv.config";
import { help } from "../../services/configs/help.config";
import { Link } from "react-router-dom";
import { Users } from "../../models/users.interface";
import { getUsers } from "../../services/api.config";

function Sidebar({ width }: { width: string }) {
  const [isActive, setIsActive] = useState<number>(0);
  const [users, setUsers] = useState<Users[]>([]);
  const [newUsers, setNewUsers] = useState<Users[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [follows, setFlollow] = useState<Users[]>([]);
  // call api
  useEffect(() => {
    handleGetUser();
  }, []);
  const handleGetUser = async () => {
    const userItem = await getUsers();
    setUsers(userItem);
    setNewUsers(userItem.slice(0, 5));
    setFlollow(
      userItem.filter((item: { following: boolean }) => item.following === true)
    );
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
    <div className={`sidebar-box ${width}`}>
      <div className="flex w-full flex-col text-left font-bold mb-[12px]">
        {navSidebar.map((item, index) => (
          <Link
            key={index}
            to={`../${item.link}`}
            onClick={() => handleActive(index)}
            className={`flex leading-[32px] p-[8px] text-[18px] text-[#161823] hover:bg-[#f8f8f8] cursor-pointer ${
              isActive === index && "active"
            }`}
          >
            <span className="w-[32px]">{item.svg}</span>
            <p className="ml-[8px]">{item.option}</p>
          </Link>
        ))}
      </div>
      {/* offer account */}
      <div className="font-medium relative">
        <div className="offer-acc py-[12px]">
          <h3 className="text-[14px] text-[#161823bf] px-[8px] font-semibold">
            Tài khoản được đề xuất
          </h3>
          {newUsers.map((item, index) => (
            <Link key={index} to={`../${item.username}`}>
              <div className="flex items-center hover:bg-[#f8f8f8] hover:cursor-pointer p-[8px] animation">
                <div className="avatar w-[32px] h-[32px] mr-[12px]">
                  <img className="rounded-[50%]" src={item.avatar} alt="" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="mr-[4px] font-bold text-[#161823]">
                      {item.username}
                    </h3>
                    <CheckIcon />
                  </div>
                  <p className="text-[12px] text-[#161823bf]">
                    {item.fullName}
                  </p>
                </div>
              </div>
            </Link>
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
      <div className="font-medium relative">
        <div className="offer-acc py-[12px]">
          <h3 className="text-[14px] text-[#161823bf] px-[8px] font-semibold">
            Đang follow
          </h3>
          {follows.map((item, index) => (
            <Link key={index} to={`../${item.username}`}>
              <div className="flex items-center hover:bg-[#f8f8f8] hover:cursor-pointer p-[8px] animation">
                <div className="avatar w-[32px] h-[32px] mr-[12px]">
                  <img className="rounded-[50%]" src={item.avatar} alt="" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="mr-[4px] font-bold text-[#161823]">
                      {item.username}
                    </h3>
                    <CheckIcon />
                  </div>
                  <p className="text-[12px] text-[#161823bf]">
                    {item.fullName}
                  </p>
                </div>
              </div>
            </Link>
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
      {/* footer */}
      <div className="footer-box">
        <div className="mb-[8px] copyright">
          {copyright.map((item, index) => (
            <a href="/" key={index}>
              {item.content}
            </a>
          ))}
        </div>
        <div className="mb-[8px] advertisement">
          {adv.map((item, index) => (
            <a href="/" key={index}>
              {item.content}
            </a>
          ))}
        </div>
        <div className="mb-[8px] help">
          {help.map((item, index) => (
            <a href="/" key={index}>
              {item.content}
            </a>
          ))}
        </div>
        <span>© 2022 TikTok</span>
      </div>
    </div>
  );
}
export default Sidebar;
