import styled from "styled-components";
import imgHero from "../assets/images/desktop/image-hero.png";

export const Header = styled.header`
  width: 100%;
  height: 650px;
  padding: 4.063rem 10.313rem 9.125rem 10.313rem;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.514079131652661) 0%,
      rgba(0, 0, 0, 0.5112780112044818) 0%
    ),
    url(${imgHero});

  background-size: cover;

  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff;
  transition: all 0.4s linear;

  @media only screen and (max-width: 1150px) {
    padding: 4.063rem 3.25rem 9.125rem 3.25rem;
  }

  @media only screen and (max-width: 430px) {
    padding: 2.5rem 1.5rem 14.188rem 1.5rem;
  }
`;
