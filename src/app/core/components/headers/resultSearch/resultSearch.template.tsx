import "./resultSearch.style.scss";
import Avt from "../../../../assets/img/avt.png";
function ResultSearch() {
  return (
    <div className="py-[9px] px-[16px] hover:bg-[#16182308]">
      <div className="flex items-center cursor-pointer">
        <img className="w-[40px] h-[40px] mr-[12px]" src={Avt} alt="" />
        <div className="info">
          <h4 className="name font-semibold text-[16px]">Họ và tên</h4>
          <p className="username text-[14px] text-[#16182380]">username</p>
        </div>
      </div>
    </div>
  );
}

export default ResultSearch;
