import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loading.style.scss";
import { useEffect, useState } from "react";

function Loading() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div
      className={`absolute top-0 left-0 z-[5] w-full h-screen ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <div className="modal"></div>
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
