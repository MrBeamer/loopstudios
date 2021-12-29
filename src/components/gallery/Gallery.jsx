import React from "react";
import {
  StyledGallery,
  Button,
  Headline,
  ContainerCards,
  Card,
  Title,
} from "./Gallery.styled";

import images from "../../assets/images/index.js";
import curiosity from "../../assets/images/desktop/image-curiosity.jpg";
import deep from "../../assets/images/desktop/image-deep-earth.jpg";
import fisheye from "../../assets/images/desktop/image-fisheye.jpg";
import above from "../../assets/images/desktop/image-from-above.jpg";
import arcade from "../../assets/images/desktop/image-night-arcade.jpg";
import pocket from "../../assets/images/desktop/image-pocket-borealis.jpg";
import soccer from "../../assets/images/desktop/image-soccer-team.jpg";
import grid from "../../assets/images/desktop/image-grid.jpg";

export default function Gallery() {
  return (
    <StyledGallery>
      <Headline>Our Creations</Headline>
      <Button>See All</Button>
      <ContainerCards>
        <Card background={curiosity}>
          <Title>DEEP EARTH</Title>
        </Card>

        <Card background={deep}>
          <Title>THE CURIOSITY</Title>
        </Card>

        <Card background={fisheye}>
          <Title>MAKE IT FISHEYE</Title>
        </Card>

        <Card background={pocket}>
          <Title>POCKET BOREALIS</Title>
        </Card>

        <Card background={above}>
          <Title>FROM UP ABOVE</Title>
        </Card>

        <Card background={grid}>
          <Title>THE GRID</Title>
        </Card>

        <Card background={soccer}>
          <Title>SOCCER TEAM VR</Title>
        </Card>

        <Card background={arcade}>
          <Title>NIGHT ARCADE</Title>
        </Card>
      </ContainerCards>
    </StyledGallery>
  );
}
