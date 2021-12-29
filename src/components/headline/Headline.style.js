import styled from "styled-components";

export const StyledHeadline = styled.h1`
  font-weight: 300;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 4.375rem;
  padding: 2.5rem;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  max-width: 35.625rem;

  @media only screen and (max-width: 430px) {
    padding: 1.5rem;
  }
`;
