import React from "react";
import { Container } from "../components/Container";
import { Divider } from "../components/Divider";
import { Section } from "../components/Section";
import { Advantage } from "../layouts/Advantage";
import Education from "../layouts/Education";
import Experience from "../layouts/Experience";
import Home from "../layouts/Home";

const HomePage = () => {
  return (
    <Container>
      <Home />
      <Section title="My Advantage">
        <Advantage />
      </Section>
      <Divider />
      <Section title="Education" id="contact">
        <Education />
      </Section>
      <Divider />
      <Section title="Work Experience" id="work">
        <Experience />
      </Section>
    </Container>
  );
};

export default HomePage;
