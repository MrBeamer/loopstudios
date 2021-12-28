import styled from "styled-components";

export const StyledGallery = styled.div`
  margin-top: 184px;
`;

export const Headline = styled.h2`
  font-weight: 300;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  color: #000000;
`;

export const Button = styled.button`
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #ffffff;
  background: #000000;
  border: 1px solid #000000;
  padding: 13px 43px 13px 38px;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 256px 256px 256px 256px;
  grid-gap: 30px;
  margin-top: 80px;
`;

export const Card = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  width: 256px;
  height: 450px;
  background-image: url("..//..//assets/images/desktop/image-fisheye.jpg");
`;

export const Image = styled.img``;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
  color: red;
`;
