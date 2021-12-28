import styled from "styled-components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Image = styled.img`
  width: 731px;
  grid-column: 1/-1;
  grid-row: 1;
`;

export const TextBlock = styled.div`
  display: grid;
  max-width: 541px;
  grid-column: 2/3;
  align-self: end;
  grid-row: 1;
  background-color: #fff;
  padding: 96px 0 0 96px;
`;

export const Headline = styled.h2`
  grid-column: 1/-1;
  max-width: 445px;

  font-weight: 300;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  grid-column: 1/-1;
  max-width: 445px;

  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  opacity: 0.5;
`;
