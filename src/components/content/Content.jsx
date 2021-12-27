import React from "react";
import waterdrop from "../../assets/images/desktop/image-drop.webp";

import {
  StyledContent,
  Image,
  TextBlock,
  Text,
  Headline,
} from "./Content.styled";

export default function Content() {
  return (
    <StyledContent>
      <Image src={waterdrop} alt="water-drop" />
      <TextBlock>
        <Headline>The leader in interactive VR</Headline>
        <Text>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Text>
      </TextBlock>
    </StyledContent>
  );
}
