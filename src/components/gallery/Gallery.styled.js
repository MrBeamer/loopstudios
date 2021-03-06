import styled from "styled-components";

export const StyledGallery = styled.div`
  margin-top: 11.5rem;
  display: grid;
  grid-template-columns: 1fr 175px;
  transition: all 0.4s linear;

  @media only screen and (max-width: 720px) {
    margin-top: 6rem;
  }
`;

export const Headline = styled.h2`
  grid-column: 1;
  font-weight: 300;
  font-size: clamp(2.4rem, 8vw, 3rem);
  line-height: 3rem;

  text-transform: uppercase;
  color: #000000;

  @media only screen and (max-width: 720px) {
    grid-column: 1/-1;
    justify-self: center;
  }
`;

export const Button = styled.button`
  grid-column: 2;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ##000000;
  background: transparent;
  cursor: pointer;
  border: 1px solid #000000;
  padding: 0.813rem 2.688rem 0.813rem 2.375rem;

  &:hover {
    color: #ffffff;
    background: #000000;
  }

  @media only screen and (max-width: 721px) {
    margin-top: 34px;
    grid-column: 1/-1;
    grid-row: 3;
    width: 175px;
    justify-self: center;
  }

  @media only screen and (max-width: 430px) {
  }
`;

export const ContainerCards = styled.div`
  grid-column: 1/-1;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(254px, 254px));
  grid-gap: 1.875rem;
  margin-top: 5rem;

  @media only screen and (max-width: 430px) {
    margin-top: 3rem;
  }
`;

export const Card = styled.div`
  display: grid;
  justify-items: center;
  align-content: end;
  width: 256px;
  height: 450px;
  background-image: url(${(props) => props.background});
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
        0deg,
        rgba(16, 143, 197, 0.5116421568627452) 0%,
        rgba(16, 143, 197, 0.5516421568627452) 0%
      ),
      url(${(props) => props.background});
  }
`;

export const Title = styled.h3`
  font-style: normal;
  max-width: 144px;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 2rem;
`;
