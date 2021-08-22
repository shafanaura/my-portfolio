import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import styled from "styled-components";

const NavContainer = styled.div`
  a {
    margin-left: 18px;
    font-size: 18px;
    color: black;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 50px;
  .nav-link {
    a {
      color: black;
      font-weight: 700;
      margin-right: 32px;
      font-size: 14px;
    }
  }
`;

export const NavContent = () => {
  return (
    <NavContainer>
      <a href="https://github.com/shafanaura" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/shafanaura/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/shafanaura48/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/in/shafanaura/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </NavContainer>
  );
};

export const Navbar = () => {
  return (
    <Nav>
      <div className="nav-link">
        <a href="#works">WORKS</a>
        <a href="#contact">CONTACT</a>
      </div>
      <NavContent />
    </Nav>
  );
};
