"use client";

import { Button } from "@mui/material";
import { FC } from "react";

import Line from "@/components/Line";
import ProjectExample from "@/components/ProjectExample";

import { items } from "./const";

import { Container, HeroContainer, Wrapper, ShinyText, Image } from "./styles";

const HomePage: FC = () => {
  return (
    <Container>
      <HeroContainer>
        <Wrapper>
          <ShinyText text="Создаем дизайн, который вызывает доверие и эмоциональную связь — узнаю и помню." />
          <Button size="large">Проекты</Button>
        </Wrapper>
        <Image
          src="/images/hero-img.png"
          width={400}
          height={300}
          alt="hero-img"
        />
      </HeroContainer>

      <Line />
      {items.map((item, i) => (
        <ProjectExample
          key={i}
          type={item.type}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          buttonPath={item.buttonPath}
          image={item.image}
        />
      ))}
    </Container>
  );
};

export default HomePage;
