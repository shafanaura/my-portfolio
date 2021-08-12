import styled from "styled-components";
import { theme } from "../theme/color";

export const Divider = styled.hr`
  height: 2px;
  background-color: ${theme.placeholder};
  border: none;
  margin: 80px 0;
`;
