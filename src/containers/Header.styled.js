import styled from "styled-components";
import imgHero from "../assets/images/desktop/image-hero.png";

export const Header = styled.header`
  width: 100%;
  height: 650px;
  padding: 65px 165px 146px 165px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.514079131652661) 0%,
      rgba(0, 0, 0, 0.5112780112044818) 0%
    ),
    url(${imgHero});

  background-size: cover;
  background-size: 100% 100%;

  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff;
`;
