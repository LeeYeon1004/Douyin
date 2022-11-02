import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Users } from "../../models/users.interface";
import { getUsers } from "../../services/api.config";
import { OptionIcon, ShareIcon } from "../../shares/icons/info.icon";
import { IconFollowed } from "../../shares/icons/userFollowed";
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
        <div className="flex gap-[16px]">
          <ShareIcon />
          <OptionIcon />
        </div>
      </div>
    </div>
  );
}

export default Info;
