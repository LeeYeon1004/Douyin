import { Link } from "react-router-dom";
import "./setting.style.scss";
import menuItem from "../../config/setting.config.json";
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
