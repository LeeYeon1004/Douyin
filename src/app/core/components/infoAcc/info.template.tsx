import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Users } from "../../models/users.interface";
import { getUsers } from "../../services/api.config";
import {
  IconFollowed,
  LinkIcon,
  OptionIcon,
  ShareIcon,
} from "../../shares/icons/info.icon";
import "./info.style.scss";

function Info() {
  let { user } = useParams();
  const [infos, setInfos] = useState<Users[]>([]);
  const [info, setInfo] = useState<Users>();
  useEffect(() => {
    handleGetInfos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const infoItem = infos.filter((item) => item.username === user);
    setInfo(infoItem[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const handleGetInfos = async () => {
    const getInfos = await getUsers();
    setInfos(getInfos);
  };
  return (
    <div className="info-box px-[24px] py-[32px] text-[#161823]">
      <div className="mb-[20px]">
        <div className="flex">
          <div className="flex items-center w-[532px]">
            <img
              className="w-[116px] h-[116px] rounded-[50%]"
              src={info?.avatar}
              alt=""
            />
            <div className="ml-[20px] flex-1">
              <h2 className="text-[32px] leading-[38px] font-semibold pb-[4px]">
                {info?.username}
              </h2>
              <h3 className="text-[18px] leading-[25px] font-medium">
                {info?.fullName}
              </h3>
              <div className="flex items-center mt-[16px]">
                <button className="mess-btn">Message</button>
                <div className="border-[1px] border-[#1618231f] rounded-[4px] p-[7px]">
                  <IconFollowed />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px] mt-[8px]">
            <ShareIcon />
            <OptionIcon />
          </div>
        </div>
        <div className="max-w-[532px]">
          <h2 className="flex items-center leading-[22px] gap-[20px] mt-[22px]">
            <div className="text-[16px]">
              <strong className="">99</strong>
              Đang Follow
            </div>
            <div>
              <strong>902.6K</strong>
              Followers
            </div>
            <div>
              <strong>28.5M</strong>
              Thích
            </div>
          </h2>
          <h2 className="whitespace-pre-line mt-[10px] text-[16px] leading-[22px]">
            YOUTUBE: SONG ĐÀO <br />
            SẢN PHẨM SONG ĐÀO DÙNG DƯỚI NÀY NHAA <br />
            👇🏻👇🏻👇🏻
          </h2>
        </div>
        <a
          href="https://www.instagram.com/psycho_beastt/"
          className="link-pin flex items-center font-semibold leading-[22px] text-[16px] mt-[6px]"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon />
          <span>beacons.ai/songdao99</span>
        </a>
      </div>
      {/*  */}
      <div>
        <div className="max-w-[460px]">
          <div className="text-[18px] leading-[25px] flex relative font-semibold">
            <p className="leading-[44px] w-[230px] text-center cursor-pointer">
              Nội dung
            </p>
            <p className="leading-[44px] w-[230px] text-center cursor-pointer">
              Đã thích
            </p>
          </div>
          <div className="div-underline"></div>
        </div>
      </div>
    </div>
  );
}

export default Info;
