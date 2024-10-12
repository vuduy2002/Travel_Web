import classNames from "classnames/bind";
import style from "./listTour.module.scss";
import CardTour from "../cardTour";
import { Button } from "flowbite-react";
const cx = classNames.bind(style);

const listTour = [
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
  {
    img: "https://www.insubuy.com/article-images/article-pages/small-article-images/normal/img-travel-insurance.jpg",
    title: "San Francisco",
    time: "3 days 2 nights",
    price: "From $1,500,000",
    rating: 4.9,
  },
];
function ListTour() {
  return (
    <div className={cx("wrapper", "px-4 py-16  max-w-screen-xl mx-auto ")}>
      <div>
        <div className={cx("title")}>
          <h1 className={cx("text-3xl mb-2")}>New Favorite Vacation Place</h1>
          <span>Favorite Destinations for Travelers in 2024.</span>
        </div>
        <div
          className={cx(
            "listTour",
            " mt-6",
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          )}
        >
          {listTour.map((tour, index) => (
            <CardTour
              key={index}
              img={tour.img}
              title={tour.title}
              time={tour.time}
              price={tour.price}
              rating={tour.rating}
            />
          ))}
          <div
            className={cx(
              "box",
              "bg-red-100 min-h-60 rounded-lg p-4",
              "relative "
            )}
          >
            <div>
              <p className={cx("title", "text-2xl font-semibold")}>
                We have many other vacation place
              </p>
              <p className={cx("text")}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={cx("btt")}>
              <Button
                className={cx(
                  "btt",
                  "w-64",
                  "absolute left-1 bottom-4",
                  "absolute left-4 bottom-4",
                  "hover:text-gray-950"
                )}
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                Explore More...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTour;
