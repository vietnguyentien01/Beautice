import Navbar from "../navbar/Navbar";
import "./header.css";
import Logo from "../../assets/imgs/logo/logoDefault.png";

export default function Header() {
  return <div className="header-container">
      <div className="header-sub-container">
        <div className="header-left">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-right">
          <Navbar />
        </div>
      </div>
    </div>
}
