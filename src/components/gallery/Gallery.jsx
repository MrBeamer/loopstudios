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

export default function Gallery() {
  return (
    <StyledGallery>
      <Headline>Our Creations</Headline>
      <Button>See All</Button>
      <ContainerCards>
        {images.map((image) => {
          return (
            <Card key={image.id} background={image.src}>
              <Title>{image.title}</Title>
            </Card>
          );
        })}
      </ContainerCards>
    </StyledGallery>
  );
}
