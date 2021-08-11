import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "./styles.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="#section-works">WORKS</a>
        <a href="#section-contact">CONTACT</a>
      </div>
      <div>
        <FaGithub className="icon" />
        <FaInstagram className="icon" />
        <FaFacebookF className="icon" />
        <FaLinkedinIn className="icon" />
      </div>
    </nav>
  );
};
