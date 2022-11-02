import { Link } from "react-router-dom";
import { Users } from "../../models/users.interface";
import FollowBtn from "../sidebars/for-you/follow-btn/followBtn.template";
import RightNav from "../rightNav/rightNav.template";
import "./main.style.scss";
import Video from "./video/video.template";

function Contentbox({
  accountItem,
  followBtn,
}: {
  accountItem: Users[];
  followBtn: string;
}) {
  return (
    <div className="content-box">
      {accountItem.map((item, index) => (
        <div key={index} className="content-item">
          <div className="w-[56px] h-[56px]">
            <Link to={`../${item.username}`}>
              <img className="rounded-[50%]" src={item.avatar} alt="avt" />
            </Link>
          </div>
          <div className="ml-[12px] w-[624px] relative">
            <div className="mb-[12px] mr-[114px]">
              <Link to={`../${item.username}`}>
                <div className="group flex items-center">
                  <h3 className="text-[18px] font-bold leading-[25px] mr-[4px] group-hover:underline">
                    {item.username}
                  </h3>
                  <h4 className="text-[14px] leading-[28px]">
                    {item.fullName}
                  </h4>
                </div>
              </Link>
              <div className="text-[16px] leading-[22px]">{item.status}</div>
            </div>
            <div className={followBtn}>
              <FollowBtn />
            </div>
            <div className="video-item">
              <Video clip={item.clip} />
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

export default Contentbox;
