import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./theme.module.scss"; // Ensure this path is correct
import Button from "@mui/material/Button";
import BoxIcon from "../boxIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

const arrBoxIcon = [
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
  {
    title: "title1",
    icon: <FontAwesomeIcon icon={faUser} />,
    to: "/",
  },
];

function ThemeBackground({ title, text, arrImg = [] }) {
  const themeRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalThemes = arrImg.length;

    // Initialize themes: show the first theme
    if (themeRef.current[0]) {
      themeRef.current[0].classList.add(cx("show"));
    }

    // const interval = setInterval(() => {
    //   // Hide the current theme
    //   if (themeRef.current[currentIndex]) {
    //     themeRef.current[currentIndex].classList.remove(cx("show"));
    //   }

    //   // Calculate the next index
    //   const nextIndex = (currentIndex + 1) % totalThemes;

    //   // Show the next theme
    //   if (themeRef.current[nextIndex]) {
    //     themeRef.current[nextIndex].classList.add(cx("show"));
    //   }

    //   // Update the current index
    //   setCurrentIndex(nextIndex);
    // }, 3000);

    // // Clean up the interval on unmount
    // return () => clearInterval(interval);
  }, [currentIndex, arrImg]);

  return (
    <div
      className={cx(
        "w-screen h-screen flex justify-center items-center flex-col "
      )}
    >
      <div>
        {arrImg.map((item, index) => (
          <div
            ref={(el) => (themeRef.current[index] = el)}
            key={index}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundImage: `url(${item})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              zIndex: "-1",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
            className={cx("fade")}
          ></div>
        ))}
      </div>
      <div className={cx("w-3/5 text-center text-white")}>
        <div
          className={cx(
            "text-3xl md:text-4xl lg:text-5xl backdrop:  font-semibold"
          )}
        >
          {title}
        </div>
        <div className={cx("my-8 w-4/5 mx-auto")}>{text}</div>
        <div className={cx("mb-10")}>
          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "var(--primary-color)" }}
          >
            Explore
          </Button>
        </div>
      </div>
      <div
        className={cx(
          "flex justify-center w-11/12 text-center text-white",
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        )}
      >
        {arrBoxIcon.map((item, index) => {
          return (
            <BoxIcon
              icon={item.icon}
              title={item.title}
              to={item.to}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ThemeBackground;
