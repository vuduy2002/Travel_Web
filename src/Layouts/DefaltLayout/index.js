import Header from "../components/header";
import Sidebar from "../components/header";
import classNames from "classnames/bind";
import style from "./defaultLayout.module.scss";
const cx = classNames.bind(style);
function DefaultLayOut({ children }) {
  return (
    <div className="wraper">
      <div>
        <Header></Header>
      </div>
      <div className={cx("container")} style={{ display: "flex" }}>
        <div className={cx("")} style={{ flex: "1" }}>
          <Sidebar></Sidebar>
        </div>
        <div className={cx("content")} style={{ flex: "4" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayOut;
