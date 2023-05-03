import "../assets/styles/team.css";
import Header from "../components/header/Header";
import CardDr from "../components/card/Card";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Person1 from "../assets/imgs/product/team/1.png";
import Person2 from "../assets/imgs/product/team/2.png";
import Person3 from "../assets/imgs/product/team/3.png";
import Person4 from "../assets/imgs/img/unsplash_Z5g_6TLS6Ho.png";
import Star from "../assets/imgs/icon/star.png";
import ArrowLeft from "../assets/imgs/icon/arrow-left.png";
import ArrowRight from "../assets/imgs/icon/arrow-right.png";
import BGLeft from "../assets/imgs/background/TeamBG1.png";
import BGRight from "../assets/imgs/background/TeamBG2.png";

export default function Team() {
  return (
    <div className="team-container">
      <ScrollToTop />
      <Header />
      <div className="team-clinic">
        <div className="our-team">
          <div className="home-body_bottom_content">
            <h6>Our Team</h6>
            <h3>We are Professional</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="our-team_card">
            <CardDr />
          </div>
        </div>
      </div>
      <div className="team-assistance">
        <div className="team-sub-assistance">
          <div className="home-body_bottom_content team-assistance_title">
            <h6>Assistance Team</h6>
            <h3>Meet the pro assistance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="team-list">
            <ul className="team-list_img">
              <li className="team-list_item">
                <div className="team-list_item_img">
                  <img src={Person1} alt="" />
                </div>
                <div className="team-list_item_content">
                  <h6>
                    <b>Lina Gustav /</b> Pharmacist
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Nam id magnis at placerat <br /> pulvinar euismod
                    neque.
                  </p>
                </div>
              </li>
              <li className="team-list_item">
                <div className="team-list_item_img">
                  <img src={Person2} alt="" />
                </div>
                <div className="team-list_item_content">
                  <h6>
                    <b>Adam White /</b> Finance
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Nam id magnis at placerat <br /> pulvinar euismod
                    neque.
                  </p>
                </div>
              </li>
              <li className="team-list_item">
                <div className="team-list_item_img">
                  <img src={Person3} alt="" />
                </div>
                <div className="team-list_item_content">
                  <h6>
                    <b>Jane Doe /</b> Marketer
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Nam id magnis at placerat <br /> pulvinar euismod
                    neque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-customer">
        <div className="team-sub-customer">
          <div className="team-customer_content">
            <h3>
              Customer satisfaction is <br /> our main goal
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, <br />
              purus sit amet luctus venenatis
            </p>
          </div>
        </div>
      </div>
      <div className="team-testimonials">
        <div className="team-testimonial_contents">
          <div className="team-sub-testimonial_contents">
            <div className="home-body_bottom_content">
              <h6>Our Testimonials</h6>
              <h3>What our customer says</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </p>
            </div>
            <div className="team-testimonial_content">
              <div className="team-testimonial_content_left">
                <img src={ArrowLeft} alt="" />
              </div>
              <div className="team-testimonial_content_center">
                <div className="team-testimonial_content_center_img">
                  <img src={Person4} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus <br /> metus tincidunt laoreet ultricies condimentum
                  ac integer <br /> aliquam. Lorem diam dignissim amet fermentum
                  elementum dui <br /> dui. Aliquam sem elementum morbi
                  imperdiet suscipit erat ut. <br /> Purus volutpat in turpis
                  gravida blandit.
                </p>
                <ul className="list-star">
                  <li className="star-item">
                    <img src={Star} alt="" />
                  </li>
                  <li className="star-item">
                    <img src={Star} alt="" />
                  </li>
                  <li className="star-item">
                    <img src={Star} alt="" />
                  </li>
                  <li className="star-item">
                    <img src={Star} alt="" />
                  </li>
                  <li className="star-item">
                    <img src={Star} alt="" />
                  </li>
                </ul>
              </div>
              <div className="team-testimonial_content_right">
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
