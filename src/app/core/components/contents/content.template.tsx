import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContentHome } from "../../models/contentHome.interface";
import { getContent } from "../../services/api.config";
import "./content.style.scss";

function Content() {
  const [contentItem, setContentItem] = useState<ContentHome[]>([]);

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
          <Link to={``}>
            <div className="w-[56px] h-[56px]">
              <img className="rounded-[50%]" src={item.avatar} alt="avt" />
            </div>
          </Link>
          <div className="ml-[12px]">
            <Link to={``} className="flex">
              <h3 className="text-[18px] font-bold leading-[25px] mr-[4px]">
                {item.userName}
              </h3>
              <h4 className="text-[14px] leading-[28px]">{item.fullName}</h4>
            </Link>
            <div className="text-[16px] leading-[22px]">{item.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
