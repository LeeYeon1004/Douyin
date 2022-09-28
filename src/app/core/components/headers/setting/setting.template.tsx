import { Link } from "react-router-dom";
import "./setting.style.scss";
import { menuItem } from "../../config/setting.config";
import { Setting as SettingModel } from "../../../models/setting.interface";
import { useEffect, useState } from "react";
import Language from "./title-language/language.template";
function Setting({ hide }: { hide: Boolean }) {
  const [history, setHistory] = useState<{ data: SettingModel[] }[]>([
    {
      data: menuItem,
    },
  ]);

  const current = history[history.length - 1];
  const menuChildren = (menu: any) => {
    const isChildren = !!menu;
    if (isChildren) {
      setHistory((prev) => [...prev, menu]);
    }
  };
  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  useEffect(() => {
    if (hide) {
      setHistory((prev) => prev.slice(0, 1));
    }
  }, [hide]);
  return (
    <div>
      {/* menu cấp 1 */}
      <div className="box w-full">
        {history.length > 1 ? <Language onBack={onBack} /> : ""}
        {current.data.map((item, index) => {
          const check = !!item.param;
          return (
            <Link
              to={check ? item.param + "" : ""}
              key={index}
              className="flex items-center w-full px-[16px] leading-[42px] hover:bg-[#16182308] cursor-default"
            >
              <div className="w-[24px] h-[24px]">{item.svg}</div>
              <button
                onClick={() => {
                  menuChildren(item.children);
                }}
                className="ml-[12px] text-[16px] font-semibold select-none w-full text-left"
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

export default Setting;
