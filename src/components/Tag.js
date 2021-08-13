import styled from "styled-components";

const Tags = styled.p`
  padding: 2px 8px;
  font-size: 13px;
  border-radius: 3px;
  background-color: black;
  color: white;
`;

export const Tag = (props) => {
  return <Tags>{props.item}</Tags>;
};
