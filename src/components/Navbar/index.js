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
        <a href="#works">WORKS</a>
        <a href="#contact">CONTACT</a>
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
