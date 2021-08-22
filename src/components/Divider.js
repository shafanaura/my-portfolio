import styled from "styled-components";
import { theme } from "../theme/color";

export const Divider = styled.hr`
  height: 2px;
  background-color: ${theme.placeholder};
  border: none;
  margin-top: 80px;
  margin-bottom: ${(props) => (props.mb ? props.mb : "80px")};
`;
