import "../assets/styles/about.css";
import Header from "../components/header/Header";
import CardDr from "../components/card/Card";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import VisionImg from "../assets/imgs/animation/Illustration-1.png";
import MissionImg from "../assets/imgs/animation/Illustration-2.png";
import PlayBtn from "../assets/imgs/icon/PolygonPlay.png";
import Logo1 from "../assets/imgs/logo/LOGO1.png";
import Logo2 from "../assets/imgs/logo/LOGO2.png";
import Logo3 from "../assets/imgs/logo/LOGO3.png";
import Logo4 from "../assets/imgs/logo/LOGO4.png";
import Logo5 from "../assets/imgs/logo/LOGO5.png";

export default function About() {
  return (
    <div className="about-container">
      <ScrollToTop />
      <Header />
      <div className="about-clinic">
        <div className="about-clinic-title">
          <h6>About</h6>
          <h3>
            We are a leading beauty clinic that has <br /> been around since
            2002
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{" "}
            <br />
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div className="about-teams">
        <div className="about-team">
          <div className="about-card-team_img">
            <div className="img-play-btn">
              <img src={PlayBtn} alt="" />
            </div>
          </div>
          <div className="about-card-team-title">
            <h6>Professional Teams</h6>
            <h3>The Professional expert</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="about-card-team_dr">
            <CardDr />
          </div>
        </div>
      </div>
      <div className="about-slogans">
        <div className="about-slogan">
          <h6>Business Slogan</h6>
          <h3>
            Best responsibility and service <br /> for our customers
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{" "}
            <br />
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
      <div className="about-ours">
        <div className="about-our">
          <div className="our-vision">
            <div className="our-vision_img">
              <img src={VisionImg} alt="" />
            </div>
            <div className="our-vision_content">
              <h6>Our Vision</h6>
              <h3>
                Be the best and go <br /> international
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. <br />
                <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </p>
            </div>
          </div>
          <div className="our-mission">
            <div className="our-mission_content">
              <h6>Our Mission</h6>
              <h3>
                Special & premium service <br /> to any clients
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. <br />
                <br /> Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </p>
            </div>
            <div className="our-mission_img">
              <img src={MissionImg} alt="" />
            </div>
          </div>
          <div className="our-client">
            <h6>Our Clients</h6>
            <h3>Well-known agencies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="our-logo">
            <ul className="list-logo">
              <li className="logo-item">
                <img src={Logo1} alt="" />
              </li>
              <li className="logo-item">
                <img src={Logo2} alt="" />
              </li>
              <li className="logo-item">
                <img src={Logo3} alt="" />
              </li>
              <li className="logo-item">
                <img src={Logo4} alt="" />
              </li>
              <li className="logo-item">
                <img src={Logo5} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}
