import React from "react";
import { CardDesc } from "../components/CardDesc";
import picture from "../../assets/img/IMG_20210810_084652.jpg";
import styled from "styled-components";
import { typography } from "../theme/typography";
import { theme } from "../theme/color";

const Layout = styled.div`
  .title {
    font-size: 42px;
    text-align: center;
    font-weight: 500;
    font-family: ${typography.giorgia};
    margin-bottom: 40px;
  }
  img {
    border-radius: 220px;
    padding: 20px;
    border: 2px solid ${theme.line};
  }
  .col {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Layout>
      <p className="title">
        Shafa Naura
        <br />
        Mobile & Web Developer
        <br />
        Based in Indonesia
      </p>

      <div className="col">
        <div>
          <CardDesc
            title="BIOGRAPHY"
            desc="Work for money and programming for love! I'm Shafa, an Mobile & Web Developer based in Indonesia"
          />
          <CardDesc title="CONTACT">
            East Java, Indonesia
            <br />
            shafanaura48@gmail.com
          </CardDesc>
          <CardDesc title="SERVICES">
            Web/Mobile Application
            <br />
            Design Prototype
            <br />
            UI/UX
          </CardDesc>
        </div>
        <img src={picture} height={550} alt="me" />
        <div>
          <CardDesc right title="YEARS OF EXPERIENCE" desc="4" big />
          <CardDesc right title="SATISFITATION CLIENTS" desc="100%" big />
          <CardDesc right title="REAL WORLD PROJECTS DONE" desc="+5" big />
          <CardDesc right title="CLIENTS OF WORLWIDE" desc="3" big />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
