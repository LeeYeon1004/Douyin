import { Link } from "react-router-dom";
import "./setting.style.scss";
import menuItem from "../../config/setting.config.json";
import { Children } from "../../../models/menuAvt.interface";
function MenuAvt() {
  const menuChildren = (check: boolean, term: any) => {
    if (check) {
      console.log(term);
    }
  };
  return (
    <div>
      {/* menu cấp 1 */}
      <div className="box w-full">
        {menuItem.map((item, index) => {
          const isChildren = !!item.children;
          return (
            <Link
              to={item.param + ""}
              key={index}
              className="flex items-center w-full px-[16px] py-[9px] hover:bg-[#16182308] cursor-default"
            >
              <i className={item.icon}></i>
              <button
                onClick={() => menuChildren(isChildren, item.children)}
                className="ml-[12px] text-[16px] font-semibold select-none"
              >
                {item.content}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MenuAvt;
