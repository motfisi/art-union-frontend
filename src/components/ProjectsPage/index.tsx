"use client";

import Image from "next/image";
import { FC } from "react";

import { Container, Grid, GridItem } from "./styles";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/hero-img.png",
];

const ProjectsPage: FC = () => {
  return (
    <Container>
      <Grid>
        {images.map((src, index) => (
          <GridItem key={src} $wide={(index + 1) % 7 === 0}>
            <Image src={src} alt="" fill />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
