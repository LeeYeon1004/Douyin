import Logo from "../../../assets/img/logo.png";
import "./header.style.scss";
function Header() {
  return (
    <div className="header-container flex items-center border-solid border-b-[1px] py-[8px] justify-center">
      <div className="header-box  flex items-center max-w-[1100px] w-full">
        <div className="logo w-[118px] cursor-pointer">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="search-box flex-1 relative text-center">
          <input
            className="input-border bg-[#F1F1F2] outline-none px-[16px] py-[12px] w-[300px]"
            type="text"
            placeholder="Tìm kiếm"
          />
          <button className="btn-border bg-[#F1F1F2] py-[12px] px-[16px] w-[52px]">
            <i className="ti-search text-[#ababaf]"></i>
          </button>
        </div>
        <div className="upload flex items-center">
          <button className="border-[1px] py-[6px] px-[16px] hover:bg-[#F1F1F2]">
            <i className="fa-regular fa-plus text-[20px]"></i> Upload
          </button>
          <div className=" group relative text-[20px] ml-[24px] cursor-pointer">
            <i className="ti-bell"></i>
            <p className="text-[14px] bg-[#616161] p-[8px] rounded-[8px] text-[#fff] absolute left-[-30px] top-[36px] w-[90px] hidden group-hover:block">
              Thông báo
            </p>
          </div>
          <div className=" group relative text-[20px] ml-[24px] cursor-pointer">
            <i className="ti-comment"></i>
            <p className="text-[14px] bg-[#616161] p-[8px] rounded-[8px] text-[#fff] absolute left-[-30px] top-[36px] w-[72px] hidden group-hover:block">
              Tin nhắn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
