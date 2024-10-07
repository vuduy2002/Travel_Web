import classNames from "classnames/bind";
import style from "./header.module.scss";
import logo from "../../../image/image.png";
import TextField from "@mui/material/TextField";
import MenuListComposition from "../../../Components/menuHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuSide from "../../../Components/menuSide";

const cx = classNames.bind(style);

function Header() {
  return (
    <div
      className={cx(
        "wrapper",
        " w-full p-4 flex  items-center absolute top-0 left-0 z-50"
      )}
    >
      <div className={cx("logo", "flex-1")}>
        <img src={logo} alt="description" className={cx("w-16 h-16")} />
      </div>
      <div className={cx("menu", "hidden md:block", "flex-1")}>
        <MenuListComposition direction={"row"} />
      </div>
      <div className={cx("search", "hidden md:block", "flex-1")}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
          InputProps={{
            sx: { color: "white", backgroundColor: "#ffffff5e" }, // Input text color and background
          }}
          InputLabelProps={{
            sx: {
              color: "white", // Label text color
              "&.Mui-focused": {
                color: "white", // Label color when focused
              },
            },
          }}
          sx={{
            float: "right",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Border color
              },
              "&:hover fieldset": {
                borderColor: "white", // Border color when hovered
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Border color when focused
              },
            },
          }}
        />
      </div>

      <div className={cx("iconMenu", "block md:hidden", "flex-1")}>
        <MenuSide />
      </div>
    </div>
  );
}

export default Header;
