"use client";

import { Box } from "@mui/material";
import { FC } from "react";

import Service from "@/components/Service";
import SilkPlane from "@/components/SilkPlane";

import ScrollStack, { ScrollStackItem } from "../ScrollStack";

import { marqueeImages, services } from "./const";

import {
  MarqueeContainer,
  ServicesContainer,
  ServicesTitle,
  Image,
  Title,
  SubTitle,
} from "./styles";

const AboutPage: FC = () => {
  return (
    <>
      <Box
        height="100vh"
        width="100%"
        display="flex"
        alignItems="center"
        mb="32px"
      >
        <Box
          width="100%"
          height="100vh"
          minHeight="300px"
          position="absolute"
          top={0}
          left={0}
          zIndex={1}
        >
          <SilkPlane
            speed={4.5}
            scale={1}
            noiseIntensity={0.8}
            rotation={5.91}
            color="#340404"
          />
        </Box>

        <SubTitle>
          <Title>ART UNION</Title> — команда дизайнеров, объединённых идеей
          создавать визуальные образы, которые вызывают эмоции и формируют
          доверие к бренду. Мы превращаем стратегию в выразительный дизайн,
          делая каждый проект уникальным и живым.
        </SubTitle>
      </Box>
      <ServicesContainer>
        <ServicesTitle>НАШИ УСЛУГИ</ServicesTitle>
        <ScrollStack>
          {services.map((service, i) => (
            <ScrollStackItem key={i}>
              <Service
                title={service.title}
                description={service.description}
                items={service.items}
                image={service.image}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
        <MarqueeContainer>
          <Box className="marquee-track">
            {[...marqueeImages, ...marqueeImages].map((image, i) => (
              <Image key={i} src={image} width={233} height={177} alt="image" />
            ))}
          </Box>
        </MarqueeContainer>
      </ServicesContainer>
    </>
  );
};

export default AboutPage;
