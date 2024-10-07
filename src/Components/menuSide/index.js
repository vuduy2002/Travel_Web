import classNames from "classnames/bind";
import style from "./menuSide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../image/image.png";
import MenuListComposition from "../menuHeader";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(style);

function MenuSide() {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);
  const ref = useRef(null);

  // Function to handle clicking outside of the menu
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShowSideMenu(false); // Close the menu
    }
  };

  useEffect(() => {
    if (isShowSideMenu) {
      // Add click listener when menu is open
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup the event listener when menu closes or component unmounts
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowSideMenu]); // Re-run effect when isShowSideMenu changes

  return (
    <div>
      {/* Menu icon for opening the side menu */}
      <div
        className={cx(
          "iconMenu",
          " p-3 rounded-md",
          " opacity-100 hover:opacity-70"
        )}
        onClick={() => setIsShowSideMenu(!isShowSideMenu)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={cx("text-2xl block cursor-pointer")}
        />
      </div>

      {/* Side menu */}
      <div
        style={{ backgroundColor: "#082417" }}
        ref={ref}
        className={cx(
          "wrapper",
          "fixed top-0 left-0",
          "w-80 h-full",
          "flex flex-col",
          "p-4",
          { show: isShowSideMenu }
        )}
      >
        <div className={cx("header", "flex-1", "flex items-center")}>
          <div className={cx("logo", "flex-[4]")}>
            <img src={logo} alt="description" className={cx("w-28 h-28")} />
          </div>
          <div className={cx("iconX", "flex-1", "p-1", "")}>
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className={cx(
                  "size-8 float-right text-white cursor-pointer",
                  " opacity-100 hover:opacity-70"
                )}
                onClick={() => setIsShowSideMenu(false)} // Close the menu when X icon is clicked
              />
            </div>
          </div>
        </div>

        <div className={cx("content", "flex-[4]")}>
          <MenuListComposition direction={"column"} />
        </div>
      </div>
    </div>
  );
}

export default MenuSide;
