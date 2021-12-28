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
console.log(images);

// import {
//   curiosity,
//   deep,
//   fisheye,
//   above,
//   grid,
//   interactive,
//   arcade,
//   pocket,
//   soccer,
// } from "../../assets/images/desktop/";

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
