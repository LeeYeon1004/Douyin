import { useState } from "react";

function FollowBtn() {
  const [follow, setFollow] = useState<boolean>(false);
  const following = () => {
    setFollow(true);
  };
  const unfollow = () => {
    setFollow(false);
  };
  return (
    <div>
      {follow ? (
        <button onClick={unfollow} className="follow-btn">
          Đang Follow
        </button>
      ) : (
        <button
          onClick={following}
          className="follow-btn text-[#fe2c55] border-[#fe2c55]"
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowBtn;
