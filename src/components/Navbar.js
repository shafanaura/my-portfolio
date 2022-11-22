import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import styled from "styled-components";
import { device } from "../utils/MediaQuery";

const NavContainer = styled.div`
  display: flex;
  gap: 24px;
  a {
    font-size: 18px;
    color: black;
  }
  @media ${device.mobile} {
    gap: 16px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 50px;
  .nav-link {
    display: flex;
    gap: 24px;
    a {
      color: black;
      font-weight: 700;
      font-size: 14px;
    }
  }
  @media ${device.tablet} {
    padding: 0 40px;
  }
  @media ${device.mobile} {
    padding: 0 20px;
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
        href="https://www.upwork.com/freelancers/~01055851b3296d5c11"
        target="_blank"
        rel="noreferrer"
      >
        <SiUpwork />
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
