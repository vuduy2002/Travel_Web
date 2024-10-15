import classNames from "classnames/bind";
import style from "./travelFounder.module.scss";
import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
const cx = classNames.bind(style);

function TravelFounder() {
  return (
    <div
      className={cx("wrapper", "w-full px-10 lg:px-20 py-28 ")}
      style={{ backgroundColor: "#f6f2eb" }}
    >
      <div className={cx("", "font-semibold text-2xl lg:text-4xl")}>
        Travia was founded in 2006 and we have <br /> collaborated with more
        than 156 tour <br /> and travel brands.
      </div>
      <div
      // className={cx(
      //   "",
      //   "h-40 lg:px-20",
      //   "font-semibold text-2xl lg:text-4xl"
      // )}
      >
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={2000}>
            <div className={cx("img-box", "flex justify-center items-center")}>
              <img
                decoding="async"
                width="524"
                height="120"
                src="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Greenhouse.png"
                class="main-image"
                alt="Title"
                url="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Greenhouse.png"
                source="library"
                srcset="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Greenhouse.png 524w, https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Greenhouse-300x69.png 300w"
                sizes="(max-width: 524px) 100vw, 524px"
              />
            </div>
            <div className={cx("img-box", "flex justify-center items-center")}>
              <img
                loading="lazy"
                decoding="async"
                width="588"
                height="124"
                src="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/TripAdvisor.png"
                class="main-image"
                alt="Title"
                url="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/TripAdvisor.png"
                source="library"
                srcset="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/TripAdvisor.png 588w, https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/TripAdvisor-300x63.png 300w"
                sizes="(max-width: 588px) 100vw, 588px"
              />
            </div>
            <div className={cx("img-box", "flex justify-center items-center")}>
              <img
                loading="lazy"
                decoding="async"
                width="340"
                height="124"
                src="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Brex-1.png"
                class="main-image"
                alt="Title"
                url="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Brex-1.png"
                source="library"
                srcset="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Brex-1.png 340w, https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Brex-1-300x109.png 300w"
                sizes="(max-width: 340px) 100vw, 340px"
              />
            </div>
            <div className={cx("img-box", "flex justify-center items-center")}>
              <img
                loading="lazy"
                decoding="async"
                width="428"
                height="104"
                src="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Calendly.png"
                class="main-image"
                alt="Title"
                url="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Calendly.png"
                source="library"
                srcset="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Calendly.png 428w, https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Calendly-300x73.png 300w"
                sizes="(max-width: 428px) 100vw, 428px"
              />
            </div>
            <div className={cx("img-box", "flex justify-center items-center")}>
              <img
                loading="lazy"
                decoding="async"
                width="320"
                height="124"
                src="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Airbnb-1.png"
                class="main-image"
                alt="Title"
                url="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Airbnb-1.png"
                source="library"
                srcset="https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Airbnb-1.png 320w, https://templatekit.reavation.com/travia/wp-content/uploads/sites/17/2024/07/Airbnb-1-300x116.png 300w"
                sizes="(max-width: 320px) 100vw, 320px"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={cx("", "w-full ")}>
        We are driving change in tourism by fostering collaboration
        <br /> among top industry brands. Our initiative aims to make consistent
        <br />
        sustainability information widely accessible, allowing travelers to
        <br /> make well-informed, sustainable choices.
      </div>
      <div>
        <Button
          className={cx("btt", "w-48 mt-12", "hover:text-gray-950")}
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default TravelFounder;
