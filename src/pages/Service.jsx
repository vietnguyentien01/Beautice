import "../assets/styles/service.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Service1 from "../assets/imgs/product/unsplash_5TJ0Hoy5FLY.png";
import Service2 from "../assets/imgs/product/unsplash_ZOT2Mewzmh8.png";
import Service3 from "../assets/imgs/product/unsplash_gzfIO69Q6eM.png";
import Service4 from "../assets/imgs/img/dr3-square.png";
import Anim1 from "../assets/imgs/animation/Animation1.png";
import Anim2 from "../assets/imgs/animation/Animation2.png";
import Anim3 from "../assets/imgs/animation/Animation3.png";
import RightVector from "../assets/imgs/icon/DoubleRightVector.png";
import PlayBtn from "../assets/imgs/icon/Group4.png";

export default function Service() {
  return <div className="service-container">
      <ScrollToTop />
      <Header />
      <div className="our-services">
        <div className="our-service-bottom">
          <div className="about-clinic-title our-services-title">
            <h6>Clinic & beauty consultant</h6>
            <h3>We focus on your beauty</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="our-service_img">
            <div className="our-service_list_img">
              <div className="our-service_item_img_top">
                <img src={Service1} alt="" />
                <img src={Service2} alt="" />
              </div>
              <div className="our-service_item_img_bottom">
                <img src={Service3} alt="" />
                <img src={Service4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-appointment">
        <div className="service-sub-appointment">
          <div className="service-consultation">
            <div className="service-consultation_img">
              <img src={Anim1} alt="" />
            </div>
            <div className="our-vision_content">
              <h6>Our Vision</h6>
              <h3>
                Be the best and go <br /> international
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. <br />
                <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </p>
              <div className="service-double_right_vector">
                <span>Make an Appointment</span>
                <img src={RightVector} alt="" />
              </div>
            </div>
          </div>
          <div className="service-treatements">
            <div className="our-vision_content">
              <h6>Our Mission</h6>
              <h3>
                Special & premium service <br /> to any clients
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. <br />
                <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </p>
              <div className="service-double_right_vector">
                <span>Make an Appointment</span>
                <img src={RightVector} alt="" />
              </div>
            </div>
            <div className="service-treatements_img">
              <img src={Anim2} alt="" />
            </div>
          </div>
          <div className="service-product">
            <div className="service-consultation_img">
              <img src={Anim3} alt="" />
            </div>
            <div className="our-vision_content">
              <h6>Our Vision</h6>
              <h3>
                Be the best and go <br /> international
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. <br />
                <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </p>
              <div className="service-double_right_vector">
                <span>Make an Appointment</span>
                <img src={RightVector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-responsibility">
        <div className="service-sub-responsibility">
          <div className="service-responsibility_content">
            <div className="service-customers">
              <h3>
                Best responsibility and service <br /> for our customers
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
                aliquam, purus sit amet luctus venenatis
              </p>
            </div>
            <div className="service-video">
              <img src={PlayBtn} alt="" />
              <span>Treatments Videos</span>
            </div>
          </div>
        </div>
      </div>
      <div className="service-FAQ">
        <div className="service-sub-FAQ">
          <div className="service-title">
            <h3>Services FAQ’s</h3>
            <div className="service-line" />
          </div>
          <div className="service-FAQ_content">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Is beauty consultation handled thoroughly?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br />
                    <br /> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Can I be beautiful in an instant time?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br />
                    <br /> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Are there any side effects to the treatment methods or treatments at this clinic?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br />
                    <br /> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Do professionals have accreditation in their respective fields?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna <br />
                    <br /> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-footer">
        <Footer />
      </div>
    </div>;
}
