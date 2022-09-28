import "./sidebar.style.scss";
import Avt from "../../../assets/img/avt.png";
import { useState } from "react";
import { navSidebar } from "../config/sidebar.config";

function Sidebar() {
  const [isActive, setIsActive] = useState<number>(0);
  const handleActive = (index: number) => {
    setIsActive(index);
  };
  return (
    <div className="max-w-[356px] mt-[12px] w-full absolute left-[0]">
      <div className="w-full border-b-[1px]">
        <ul className="flex flex-col text-left font-bold mb-[12px]">
          {navSidebar.map((item, index) => (
            <li
              key={index}
              onClick={() => handleActive(index)}
              className={`leading-[32px] p-[8px] text-[18px] text-[#161823] hover:bg-[#f8f8f8] cursor-pointer ${
                isActive === index && "active"
              }`}
            >
              <i className={`w-[32px] ${item.svg}`}></i>
              {item.option}
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
