import classNames from "classnames/bind";
import style from "./cardTour.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "flowbite-react";
import { Button } from "flowbite-react";
const cx = classNames.bind(style);

function CardTour({ img, title, time, price, rating }) {
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("img", "h-44 rounded-lg")}
        style={{
          backgroundImage: `URL(${img})`,
          backgroundSize: "cover",
        }}
      >
        <Button className={cx("btt", "w-44", "absolute left-1 bottom-4")}>
          Booking
        </Button>
      </div>
      <div className={cx("title", "text-xl font-semibold mt-3")}>{title}</div>
      <span className={cx("infor")}>{price}</span>
      <FontAwesomeIcon icon={faCircle} className={cx("font-dot", "px-2 ")} />
      <span className={cx("infor")}>{time}</span>
      <div className={cx("rating")}>
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            {rating}
          </p>
        </Rating>
      </div>
    </div>
  );
}

export default CardTour;
