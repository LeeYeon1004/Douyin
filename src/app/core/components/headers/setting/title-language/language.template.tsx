import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Language({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative py-[13px] mt-[-8px] flex">
      <button onClick={onBack} className="absolute w-[64px]">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h3 className="font-semibold text-center flex-1">Ngôn ngữ</h3>
    </div>
  );
}

export default Language;
