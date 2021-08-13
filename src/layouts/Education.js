import { Fragment } from "react";
import styled from "styled-components";
import { theme } from "../theme/color";
import { typography } from "../theme/typography";
import dataEducation from "../utils/education.json";

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  font-family: ${typography.giorgia};
  margin-bottom: 4px;
`;

const TextTitle = styled.p`
  color: ${theme.placeholder};
  font-weight: 700;
  margin-bottom: 24px;
  font-size: 14px;
`;

const Text = styled.p`
  color: ${theme.placeholder};
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 14px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 6em;
`;

const Education = () => {
  return (
    <Container>
      {dataEducation.map((item) => (
        <div key={item.id}>
          <TextTitle>{item.date}</TextTitle>
          <Title>{item.major}</Title>
          <Text>{item.school}</Text>
          <p>{item.description}</p>
        </div>
      ))}
    </Container>
  );
};

export default Education;
