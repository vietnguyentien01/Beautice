import "../assets/styles/contact.css";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Location from "../assets/imgs/icon/map-marker-alt.png";
import Phone from "../assets/imgs/icon/phone-alt.png";
import Mail from "../assets/imgs/icon/mail-bulk.png";
import BgMap from "../assets/imgs/background/map.png";

export default function Contact() {
  return (
    <div className="contact-public-container">
      <ScrollToTop />
      <Header />
      <div className="contact-public">
        <div className="contact-sub-public">
          <div className="contact-sub-public_content">
            <div className="contact-public-top">
              <div className="contact-public-sub-top">
                <div className="our-gallery-top_left contact-public-sub-left">
                  <h6>Contact Us</h6>
                  <h3>Contact service for our customers</h3>
                </div>
                <div className="our-gallery-top_right contact-public-sub-right">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-public-bottom">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <img src={BgMap} alt="" />
      </div>
      <div className="contact-direct">
        <div className="contact-direct_top">
          <h6>Get in Touch</h6>
          <h3>Get direct handling by us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="contact-direct_bottom">
          <ul className="list-contact_icon">
            <li className="item-contact_icon">
              <div className="sub-item-contact_icon">
                <img src={Location} alt="" />
                <div className="item-contact_icon_content">
                  <h6>Address</h6>
                  <h3>101 Baker Street, NY</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit
                  </p>
                </div>
              </div>
            </li>
            <li className="item-contact_icon item-contact_icon_BG">
              <div className="sub-item-contact_icon">
                <img src={Phone} alt="" />
                <div className="item-contact_icon_content">
                  <h6>Phone</h6>
                  <h3>+896 120 5889</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit
                  </p>
                </div>
              </div>
            </li>
            <li className="item-contact_icon">
              <div className="sub-item-contact_icon">
                <img src={Mail} alt="" />
                <div className="item-contact_icon_content">
                  <h6>Mail</h6>
                  <h3>mail@company.com</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit
                  </p>
                </div>
              </div> 
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
