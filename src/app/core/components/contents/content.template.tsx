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
            <img
              className="w-[56px] h-[56px] rounded-[50%]"
              src={item.avatar}
              alt="avt"
            />
          </Link>
          <div className="ml-[12px]">
            <div className="flex">
              <h3>{item.userName}</h3>
              <p>{item.fullName}</p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
