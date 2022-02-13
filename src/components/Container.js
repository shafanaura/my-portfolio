import styled from "styled-components";
import { device } from "../utils/MediaQuery";

export const Container = styled.div`
  padding: 20px 60px;
  @media ${device.tablet} {
    padding: 10px 40px;
  }
  @media ${device.mobile} {
    padding: 5px 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 3em;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
