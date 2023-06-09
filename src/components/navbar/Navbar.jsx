import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(true);

  return  <>
    <ul className={show ? "navbar-container collapse" : "navbar-container collapse navbar-container-lg"} id="navbarToggleExternalContent">
      <li className="navbar-item">
        <Link to="/" className="navbar-link_bold">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/service" className="navbar-link">
          Service
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/gallery" className="navbar-link">
          Gallery
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/blog" className="navbar-link">
          Blog
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/contact" className="navbar-link btn-public navbar-contact">
          Contact
        </Link>
      </li>
      <li className="navbar-item navbar-item-show">
        <button onClick={() => setShow(!show)}>X</button>
      </li>
    </ul>
    
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </>
}
