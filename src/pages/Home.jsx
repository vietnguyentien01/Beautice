import "../assets/styles/home.css";
import Header from "../components/header/Header";
import Image from "../assets/imgs/animation/anim.png";
import Anim1 from "../assets/imgs/animation/anim1.png";
import Anim2 from "../assets/imgs/animation/anim2.png";
import Anim3 from "../assets/imgs/animation/anim3.png";
import ImgRoomMaster from "../assets/imgs/background/roomMaster.png";
import PlayBtn from "../assets/imgs/icon/Play_button.png";
import { Link } from "react-router-dom";
import CardDr from "../components/card/Card";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export default function Home() {
  return (
    <div className="home-container">
      <ScrollToTop />
      <div className="home-clinic">
        <div className="home-clinic-top">
          <Header />
        </div>
        <div className="home-clinic-center">
          <div className="home-clinic-center_left">
            <h1>Clinic & beauty consultant</h1>
            <p>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
          </div>
          <div className="home-clinic-center_right">
            <img src={Image} />
          </div>
        </div>
        <div className="home-clinic-bottom">
          <ul className="dot_list">
            <li className="dot_item" />
            <li className="dot_item" />
            <li className="dot_item" />
          </ul>
        </div>
      </div>
      <div className="home-services">
        <div className="home-service">
          <h6>Main Services</h6>
          <h3>
            Learn services to focus <br /> on your beauty
          </h3>
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient <br /> amet, feugiat tellus sagittis,
            scelerisque eget nulla turpis.
          </p>
        </div>
      </div>
      <div className="home-body">
        <div className="home-sub-body">
          <div className="home-body_top">
            <ul className="card-list">
              <li className="card-item">
                <div className="card-sub-item">
                  <div className="card-item_img">
                    <img src={Anim1} />
                  </div>
                  <h6>Beauty consultation</h6>
                  <p>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </p>
                </div>
              </li>
              <li className="card-item">
                <div className="card-sub-item">
                  <div className="card-item_img">
                    <img src={Anim2} />
                  </div>
                  <h6>Skin treatments</h6>
                  <p>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </p>
                </div>
              </li>
              <li className="card-item">
                <div className="card-sub-item">
                  <div className="card-item_img">
                    <img src={Anim3} />
                  </div>
                  <h6>Beauty product</h6>
                  <p>
                    Non parturient amet, feugiat tellus sagittis, scelerisque
                    eget nulla turpis.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="home-body_center">
            <div className="home-about_left">
              <h6>About Us</h6>
              <h3>We are the best beauty clinic</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
                <br />
                <br />
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </p>
              <div className="home-about_left_btn">
                <div className="btn-learn-more">
                  <Link to="/about" className="btn-public">
                    Learn More
                  </Link>
                </div>
                <div className="btn-watch_video">
                  <div className="btn-sub-watch_video">
                    <img src={PlayBtn} className="btn-play" />
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-about-right">
              <div className="home-about-img">
                <img src={ImgRoomMaster} />
              </div>
            </div>
          </div>
          <div className="home-body_bottom">
            <div className="home-body_bottom_content">
              <h6>Professional Teams</h6>
              <h3>The Professional expert</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contacts">
        <div className="home-contact">
          <div className="home-card-dr">
            <CardDr />
          </div>
          <div className="home-card-contact_form">
            <div className="form-right-top">
              <div>
                <h6>Contact Us</h6>
                <h3>
                  Send your inquiry to <br /> our expert team
                </h3>
                <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}
