import React from "react";
import styled from "styled-components";
import { NavContent } from "../components/Navbar";

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Shafa Naura. All rights reserved.</p>
      <NavContent />
    </Container>
  );
};

export default Footer;
