import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./boxIcon.module.scss";
const cx = classNames.bind(style);

function BoxIcon({ icon, title, to }) {
  return (
    <Link to={to} className={cx("wrapper", "block")}>
      <div className={cx("flex flex-col w-full")}>
        <div className={cx("icon")}>{icon}</div>
        <div className={cx("title", "font-semibold")}>{title}</div>
      </div>
    </Link>
  );
}

export default BoxIcon;
