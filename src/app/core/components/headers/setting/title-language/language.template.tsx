import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Language({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative mt-[-8px] flex items-center leading-[50px]">
      <div className="fixed w-full top-0 bg-white rounded-[8px]">
        <button onClick={onBack} className="absolute w-[64px]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h3 className="font-semibold text-center flex-1">Ngôn ngữ</h3>
      </div>
    </div>
  );
}

export default Language;
