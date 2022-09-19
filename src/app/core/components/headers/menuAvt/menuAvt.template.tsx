import { Link } from "react-router-dom";
import "./menuAvt.style.scss";
const menuItem = [
  {
    content: "Xem hồ sơ",
    icon: "fa-solid fa-user",
    param: "/link",
  },
  {
    content: "Nhận xu",
    icon: "fa-brands fa-tiktok",
    param: "/link",
  },
  {
    content: "Cài đặt",
    icon: "ti-settings",
    param: "/link",
  },
  {
    content: "Tiếng việt",
    icon: "ti-book",
    children: {
      title: "language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    content: "Phản hồi và trợ giúp",
    icon: "ti-help-alt",
    param: "/link",
  },
  {
    content: "Phím tắt",
    icon: "fa-regular fa-keyboard",
    param: "/link",
  },
];
function MenuAvt() {
  return (
    <div>
      {/* menu cấp 1 */}
      <div className="box w-full">
        {menuItem.map((item, index) => (
          <Link
            to=""
            key={index}
            className="flex items-center w-full px-[16px] py-[9px] hover:bg-[#16182308] cursor-default"
          >
            <i className={item.icon}></i>
            <p className="ml-[12px] text-[16px] font-semibold select-none">
              {item.content}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuAvt;
