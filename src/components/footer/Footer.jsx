import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/imgs/logo/logoWhite.png";
import FB from "../../assets/imgs/media/facebook-f.png";
import TW from "../../assets/imgs/media/twitter-t.png";
import IN from "../../assets/imgs/media/linkedin-in.png";
import YT from "../../assets/imgs/media/youtube.png";
import IG from "../../assets/imgs/media/instagram-i.png";
import CaretRight from "../../assets/imgs/icon/caret-right.png";
import BottomBG from "../../assets/imgs/background/BottomBG.png";
import styled from "styled-components";

export default function Footer() {
  const Title = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: #d7dbff;
  `;

  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-sub-container">
          <div className="footer-top">
            <div className="footer-top_logo">
              <div className="footer-top_logo_img">
                <img src={Logo} alt="" />
              </div>
              <div className="footer-top_logo_content">
                <p>
                  <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                </p>
                <p>Baker Steet 101, NY, United States.</p>
                <div className="footer-top_logo_contact">
                  <span>+521 569 8966.</span>
                  <span>mail@company.com.</span>
                </div>
              </div>
            </div>
            <div className="footer-top_page">
              <h6>Pages</h6>
              <ul className="page-list">
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/"}>
                    <Title>Home</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/about"}>
                    <Title>About</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/service"}>
                    <Title>Services</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/gallery"}>
                    <Title>Gallery</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/team"}>
                    <Title>Team</Title>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-top_info">
              <h6>Informations</h6>
              <ul className="page-list">
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/"}>
                    <Title>Terms & conditions</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/"}>
                    <Title>Privacy policy</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/"}>
                    <Title>Blog</Title>
                  </Link>
                </li>
                <li className="page-item">
                  <img src={CaretRight} alt="" />
                  <Link to={"/contact"}>
                    <Title>Contact</Title>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom_media">
              <ul className="media-list">
                <li className="media-item">
                  <img src={FB} alt="" />
                </li>
                <li className="media-item">
                  <img src={TW} alt="" />
                </li>
                <li className="media-item">
                  <img src={IN} alt="" />
                </li>
                <li className="media-item">
                  <img src={YT} alt="" />
                </li>
                <li className="media-item">
                  <img src={IG} alt="" />
                </li>
              </ul>
            </div>
            <div className="footer-bottom_alt">
              <p>© AltDesain Studio 2021 - All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <img src={BottomBG} alt="" className="footer-background_img" />
      </div>
    </div>
  );
}
