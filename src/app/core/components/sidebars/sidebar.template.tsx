import "./sidebar.style.scss";
import Avt from "../../../assets/img/avt.png";
import { useState } from "react";
const option = [
  {
    option: "Dành cho bạn",
    icon: "fa-solid fa-house",
  },
  {
    option: "Dành follow",
    icon: "fa-regular fa-user",
  },
  {
    option: "LIVE",
    icon: "fa-solid fa-video",
  },
];
function Sidebar() {
  // note
  const [isActive, setIsActive] = useState<number>(0);
  const handleActive = (index: number) => {
    setIsActive(index);
  };
  return (
    <div className="max-w-[356px] mt-[12px] w-full absolute left-[0]">
      {/* menu */}
      <div className="w-full border-b-[1px]">
        <ul className="flex flex-col text-left font-semibold mb-[12px]">
          {option.map((item, index) => (
            <li
              key={index}
              onClick={() => handleActive(index)}
              className={`leading-[32px] p-[8px] text-[18px] text-[#161823] hover:bg-[#f8f8f8] cursor-pointer ${
                isActive === index && "active"
              }`}
            >
              <i className={`w-[32px] ${item.icon}`}></i>
              {item.option}
            </li>
          ))}
        </ul>
      </div>
      {/* option */}
      <div className="font-medium border-b-[1px]">
        <div className="my-[12px]">
          <p className="text-[14px] text-[#161823bf]">Tài khoản được đề xuất</p>
          <div className="flex items-center hover:bg-[#f8f8f8] hover:cursor-pointer p-[8px] animation">
            <div className="avatar w-[32px] h-[32px] mr-[12px]">
              <img src={Avt} alt="" />
            </div>
            <div>
              <h3>song.dao99</h3>
              <p className="text-[12px] text-[#161823bf]">Song Đào</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
