import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "../../models/user.interface";
import { getContent } from "../../services/api.config";
import "./forYou.style.scss";
import RightNav from "../rightNav/rightNav.template";
import FollowBtn from "./follow-btn/followBtn.template";

function ForYou() {
  const [contentItem, setContentItem] = useState<User[]>([]);

  useEffect(() => {
    callItem();
  }, []);
  const callItem = async () => {
    const getItem = await getContent();
    setContentItem(getItem);
  };
  return (
    <div className="content-box">
      {contentItem.map((item, index) => (
        <div key={index} className="content-item">
          <Link to={`../${item.userName}`}>
            <div className="w-[56px] h-[56px]">
              <img className="rounded-[50%]" src={item.avatar} alt="avt" />
            </div>
          </Link>
          <div className="ml-[12px] w-[624px] relative">
            <div className="mb-[12px] mr-[114px]">
              <Link to={`../${item.userName}`}>
                <div className="group flex items-center">
                  <h3 className="text-[18px] font-bold leading-[25px] mr-[4px] group-hover:underline">
                    {item.userName}
                  </h3>
                  <h4 className="text-[14px] leading-[28px]">
                    {item.fullName}
                  </h4>
                </div>
              </Link>
              <div className="text-[16px] leading-[22px]">{item.status}</div>
            </div>
            <div>
              <FollowBtn />
            </div>
            <div className="video-item">
              <div className="h-auto mr-[20px]">
                <video
                  className="rounded-[8px] max-h-[600px]"
                  playsInline={true}
                  x5-playsinline="true"
                  webkit-playsinline="true"
                  tabIndex={2}
                  controls
                  loop
                  src={item.clip}
                ></video>
              </div>
              <div className="flex items-end">
                <RightNav />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForYou;
