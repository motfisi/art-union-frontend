import { FC } from "react";
import Image from "next/image";
import Line from "@/components/Line";
import { useDevice } from "@/hooks";
import { Box, Button } from "@mui/material";

import { ProjectExampleProps } from "./types";

import {
  Container,
  ImageWrapper,
  TitleText,
  TypeText,
  Wrapper,
} from "./styles";

const ProjectExample: FC<ProjectExampleProps> = (props) => {
  const { type, title, description, image, buttonText, buttonPath } = props;

  const { isTablet } = useDevice();

  return (
    <Container>
      <ImageWrapper>
        <Image src={image} fill alt="product-pic" />
      </ImageWrapper>
      <Wrapper className="wrapper">
        <Box
          display="flex"
          flexDirection="column"
          gap={isTablet ? 1 : 2}
          alignItems="inherit"
        >
          <TypeText color="primary.main" className="text">
            {type}
          </TypeText>
          <TitleText className="text">{title}</TitleText>
          <TypeText color="text.secondary" className="text">
            {description}
          </TypeText>
        </Box>
        <Line />
        <Button size="large" href={buttonPath}>
          {buttonText}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ProjectExample;
