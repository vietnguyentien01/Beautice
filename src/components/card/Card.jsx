import "./card.css";
import Img1 from "../../assets/imgs/img/dr3.png";
import Img2 from "../../assets/imgs/img/dr1.png";
import Img3 from "../../assets/imgs/img/dr2.png";
import FB from "../../assets/imgs/media/Facebook.png";
import TW from "../../assets/imgs/media/Twitter.png";
import IG from "../../assets/imgs/media/Instagram.png";

export default function Card() {
  return <div className="container-public">
      <ul className="card-list_public">
        <li className="card-item_public">
          <div className="card-img">
            <img src={Img1} />
          </div>
          <div className="card-desc">
            <h6>Surgeon</h6>
            <h3>Briyan Nevalli</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </div>
          <div className="card-media">
            <ul className="card-media_list">
              <li className="card-media_list_item">
                <img src={TW} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={FB} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={IG} className="card-media_list_img" />
              </li>
            </ul>
          </div>
        </li>
        <li className="card-item_public">
          <div className="card-img">
            <img src={Img2} />
          </div>
          <div className="card-desc">
            <h6>Dermatologist</h6>
            <h3>Bella sebastian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </div>
          <div className="card-media">
            <ul className="card-media_list">
              <li className="card-media_list_item">
                <img src={TW} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={FB} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={IG} className="card-media_list_img" />
              </li>
            </ul>
          </div>
        </li>
        <li className="card-item_public">
          <div className="card-img">
            <img src={Img3} />
          </div>
          <div className="card-desc">
            <h6>Stylist expert</h6>
            <h3>Lilly Adams</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </div>
          <div className="card-media">
            <ul className="card-media_list">
              <li className="card-media_list_item">
                <img src={TW} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={FB} className="card-media_list_img" />
              </li>
              <li className="card-media_list_item">
                <img src={IG} className="card-media_list_img" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>;
}
