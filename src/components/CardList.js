import styled from "styled-components";
import { theme } from "../theme/color";
import { typography } from "../theme/typography";

const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  font-family: ${typography.giorgia};
  margin-bottom: 4px;
`;

const TextTitle = styled.p`
  color: ${theme.label};
  margin-bottom: 24px;
  font-size: 14px;
`;

const Text = styled.p`
  color: ${theme.label};
  font-size: 14px;
`;

const CardList = (props) => {
  return (
    <div {...props}>
      <TextTitle>{props.date}</TextTitle>
      <Title>{props.title}</Title>
      <Text>{props.text1}</Text>
      <Text>{props.text2}</Text>
      <p style={{ marginTop: 16 }}>{props.description}</p>
    </div>
  );
};

export default CardList;
