import "./rightNav.style.scss";
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
function RightNav() {
  const [active, setActive] = useState<boolean>(false);
  const [sumLike, setSumLike] = useState<number>(250);
  useEffect(() => {
    if (active) {
      setSumLike(sumLike + 1);
    } else {
      setSumLike(sumLike - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  const activeLike = () => {
    setActive(!active);
  };
  return (
    <div className="right-box">
      <button onClick={() => activeLike()}>
        <div
          className={`w-[48px] h-[48px] mt-[8px] mb-[6px] rounded-[50%] bg-[#1618230f] flex items-center justify-center`}
        >
          <FontAwesomeIcon
            className={`${active ? "active" : ""} w-[20px] h-[20px]`}
            icon={faHeart}
          />
        </div>
        <strong className="text-[#161823bf] text-[12px] leading-[17px]">
          {sumLike}
        </strong>
      </button>
      <button>
        <span className="w-[48px] h-[48px] mt-[8px] mb-[6px] rounded-[50%] bg-[#1618230f] flex items-center justify-center">
          <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCommentDots} />
        </span>
        <strong className="text-[#161823bf] text-[12px] leading-[17px]">
          2020
        </strong>
      </button>
      <button>
        <span className="w-[48px] h-[48px] mt-[8px] mb-[6px] rounded-[50%] bg-[#1618230f] flex items-center justify-center">
          <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faShare} />
        </span>
        <strong className="text-[#161823bf] text-[12px] leading-[17px]">
          1004
        </strong>
      </button>
    </div>
  );
}

export default RightNav;
