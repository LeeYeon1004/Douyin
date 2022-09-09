import "./menuAvt.style.scss";
const menuItem = [
  {
    content: "Xem hồ sơ",
    icon: "fa-solid fa-user",
  },
  {
    content: "Nhận xu",
    icon: "fa-brands fa-tiktok",
  },
  {
    content: "Cài đặt",
    icon: "ti-settings",
  },
  {
    content: "Tiếng việt",
    icon: "ti-book",
  },
  {
    content: "Phản hồi và trợ giúp",
    icon: "ti-help-alt",
  },
  {
    content: "Phím tắt",
    icon: "fa-regular fa-keyboard",
  },
];
function MenuAvt() {
  return (
    <div>
      {/* menu cấp 1 */}
      <div className="box w-full">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full px-[16px] py-[9px] hover:bg-[#16182308] cursor-default"
          >
            <i className={item.icon}></i>
            <p className="ml-[12px] text-[16px] font-semibold">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuAvt;
