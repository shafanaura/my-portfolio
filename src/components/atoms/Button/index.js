import styled from "styled-components";

export const Button = styled.button`
  background: rgb(123, 60, 255);
  padding: 10px 20px;
  border-radius: ${(props) => (props.right ? "32px 8px" : "8px 32px")};
  color: white;
  font-weight: 600;
  border-color: transparent;
  cursor: pointer;
`;
