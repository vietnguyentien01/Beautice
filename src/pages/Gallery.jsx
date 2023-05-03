import "../assets/styles/gallery.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Img1 from "../assets/imgs/product/gallery/1.png";
import Img2 from "../assets/imgs/product/gallery/2.png";
import Img3 from "../assets/imgs/product/gallery/3.png";
import Img4 from "../assets/imgs/product/gallery/4.png";
import Img5 from "../assets/imgs/product/gallery/5.png";
import Img6 from "../assets/imgs/product/gallery/6.png";
import Img7 from "../assets/imgs/product/gallery/7.png";
import Img8 from "../assets/imgs/product/gallery/8.png";
import Img9 from "../assets/imgs/product/gallery/9.png";
import PlayBtn from "../assets/imgs/icon/Group4.png";

export default function Gallery() {
  return <div className="gallery-container">
      <ScrollToTop />
      <Header />
      <div className="our-gallery">
        <div className="our-sub-gallery">
          <div className="our-gallery-top">
            <div className="our-gallery-top_left">
              <h6>Our Gallery</h6>
              <h3>Check out the collection pictures from our clinic</h3>
            </div>
            <div className="our-gallery-top_right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
          </div>
          <div className="our-gallery-center">
            <ul className="gallery-list_img">
              <li className="gallery-list_item">
                <img src={Img1} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img2} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img3} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img4} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img5} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img6} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img7} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img8} alt="" />
              </li>
              <li className="gallery-list_item">
                <img src={Img9} alt="" />
              </li>
            </ul>
          </div>
          <div className="our-gallery-bottom">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <b>our teams.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-video-tour">
        <div className="gallery-sub-video-tour">
          <div className="gallery-video-tour_content">
            <h3>Watch the video tour</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          <div className="gallery-video-tour_btn">
            <img src={PlayBtn} alt="" />
          </div>
        </div>
      </div>
      <div className="gallery-quota">
        <div className="gallery-sub-quota">
          <div className="gallery-quota_content">
            <h6>Get The Quota</h6>
            <h3>Want to be handled by our professional team immediately?</h3>
            <p>
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </p>
          </div>
          <div className="gallery-quota_btn">
            <button className="gallery-btn btn-public">Make an Appointment</button>
          </div>
        </div>
      </div>
      <div className="gallery-footer">
        <Footer />
      </div>
    </div>;
}
