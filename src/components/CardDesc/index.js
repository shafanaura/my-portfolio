import styled from "styled-components";
import { theme } from "../../theme/color";
import { typography } from "../../theme/typography";

const Card = styled.div`
  margin-bottom: 60px;
  text-align: ${(props) => props.right && "end"};
  width: 250px;
`;

const Title = styled.p`
  color: ${theme.placeholder};
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-family: ${typography.giorgia};
  font-size: 18px;
  line-height: 1.8rem;
  font-size: ${(props) => (props.big ? "48px" : "18px")};
`;

export const CardDesc = (props) => {
  return (
    <Card {...props}>
      <Title>{props.title}</Title>
      <Desc {...props}>
        {props.desc}
        {props.children}
      </Desc>
    </Card>
  );
};
