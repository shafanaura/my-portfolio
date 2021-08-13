import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 60px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 6em;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
