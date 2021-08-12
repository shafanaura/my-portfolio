import React from "react";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Advantage } from "../layouts/Advantage";
import Home from "../layouts/Home";

const HomePage = () => {
  return (
    <Container>
      <Home />
      <Section title="My Advantage">
        <Advantage />
      </Section>
      <section id="works">a</section>
      <section id="contact">a</section>
    </Container>
  );
};

export default HomePage;
