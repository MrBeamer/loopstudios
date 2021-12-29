import styled from "styled-components";

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 541px;

  @media only screen and (max-width: 948px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

export const Image = styled.img`
  max-width: 45.688rem;
  height: 500px;
  width: 100%;
  grid-column: 1/-1;
  grid-row: 1;
`;

export const TextBlock = styled.div`
  display: grid;
  max-width: 32.125rem;
  grid-column: 2/3;
  align-self: end;
  grid-row: 1;
  background-color: #fff;
  padding: 6rem 0 0 5rem;
  height: 317px;

  @media only screen and (max-width: 948px) {
    grid-column: 1;
    grid-row: 2;
    padding: 6rem 0 0 0;
  }

  @media only screen and (max-width: 430px) {
    padding: 3rem 0 0 0;
  }
`;

export const Headline = styled.h2`
  grid-column: 1/-1;
  max-width: 27.813rem;

  font-weight: 300;
  font-size: clamp(2.5rem, 8vw, 3rem);
  line-height: 3rem;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 1.563rem;
`;

export const Text = styled.p`
  grid-column: 1/-1;
  max-width: 27.813rem;
  font-weight: normal;
  font-size: 0.938rem;
  line-height: 1.563rem;
  color: #000000;
  opacity: 0.5;
`;
