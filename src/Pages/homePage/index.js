import classNames from "classnames/bind";
import style from "./homePage.module.scss";
import ThemeBackground from "../../Components/themeMain";
import ListTour from "../../Components/listTour";
import TravelFounder from "../../Components/travelFounder";
const cx = classNames.bind(style);

const obHome = {
  title: "Let's Explore the World and Make Your Traveling Easy",
  text: "Let us schedule your dream trip with the best service and unforgettable experiences. Book your trip now and start an extraordinary adventure with us.",
  arrimg: [
    // "https://media.istockphoto.com/id/1587139288/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=R0dwCP7CuuY1xk53s4ggVCttAOei2lcSsc0BbjfKSTs=",
    // "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=",
    "https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=_bb2PdPJMtY9KmNNBSFY6w_TOcC98we45LvsYoa48p8=",
  ],
};
const title = "Let's Explore the World and Make Your Traveling Easy";
function HomePage() {
  return (
    <div className={cx("ThemeBackground", "relative", "w-screen")}>
      {/* ThemeBackground */}
      <div>
        <ThemeBackground
          title={obHome.title}
          arrImg={obHome.arrimg}
          text={obHome.text}
        />
      </div>
      {/* List tour */}
      <div className={cx("w-full")}>
        <ListTour />
      </div>
      {/* TravelFounder  */}
      <div className={cx("w-full")}>
        <TravelFounder />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HomePage;
