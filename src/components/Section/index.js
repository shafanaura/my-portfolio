import { Fragment } from "react";
import styled from "styled-components";
import { typography } from "../../theme/typography";

const Title = styled.p`
  text-align: center;
  font-size: 36px;
  font-family: ${typography.giorgia};
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const Section = (props) => {
  return (
    <Fragment>
      <Title>{props.title}</Title>
      {props.children}
    </Fragment>
  );
};
