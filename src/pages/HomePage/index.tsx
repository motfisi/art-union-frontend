"use client";

import { FC } from "react";

import { Button } from "@mui/material";
import Line from "@/components/Line";
import ProjectExample from "@/components/ProjectExample";

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

      <ProjectExample
        type="разработка дизайна этикетки"
        title="vodka CHINA"
        description="Проект для Envero стал воплощением баланса между эстетикой и функциональностью.Дизайн этикетки передаёт характер бренда через сдержанную элегантность, изысканную типографику и тщательно продуманную композицию."
        buttonText="О нас"
        buttonPath="/about"
        image="/images/vodka-china.png"
      />
      <ProjectExample
        type="разработка дизайна этикетки"
        title="vodka CHINA"
        description="Проект для Envero стал воплощением баланса между эстетикой и функциональностью.Дизайн этикетки передаёт характер бренда через сдержанную элегантность, изысканную типографику и тщательно продуманную композицию."
        buttonText="О нас"
        buttonPath="/about"
        image="/images/vodka-china.png"
      />
      <ProjectExample
        type="разработка дизайна этикетки"
        title="vodka CHINA"
        description="Проект для Envero стал воплощением баланса между эстетикой и функциональностью.Дизайн этикетки передаёт характер бренда через сдержанную элегантность, изысканную типографику и тщательно продуманную композицию."
        buttonText="О нас"
        buttonPath="/about"
        image="/images/vodka-china.png"
      />
    </Container>
  );
};

export default HomePage;
