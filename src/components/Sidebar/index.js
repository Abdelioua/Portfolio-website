import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/images/ao.png";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={`nav-bar ${showNav ? "mobile" : ""}`}>
        <Link className="logo" to={"/"}>
          <img className="main-logo" src={Logo} alt="" />
        </Link>
        <Link className="logo" to={"/"}>
          <h5 className="sub-logo">Abderrahmane</h5>
        </Link>
        <nav>
          <FontAwesomeIcon
            icon={faClose}
            size="3x"
            color="#fff"
            onClick={() => setShowNav(false)}
            className="closeNav"
          />
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            className="home-link"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d43" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d43" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d43" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d43" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/abderrahmane-abdelioua/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Abdelioua?tab=repositories"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:abderrahmane.abdelioua@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#e1b4ff"
        size="3x"
        className="hamburger"
      />
    </>
  );
};

export default Sidebar;
