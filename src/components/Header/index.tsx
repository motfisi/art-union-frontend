"use client";

import { FC } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useDevice } from "@/hooks";
import { ROUTES } from "@/const";

import {
  BurgerContainer,
  Container,
  LogoContainer,
  MaxWidthWrapper,
} from "./styles";

const Header: FC = () => {
  const { isTablet } = useDevice();

  return (
    <Container>
      <MaxWidthWrapper>
        {!isTablet && (
          <Typography
            fontFamily="var(--font-involve)"
            fontWeight={700}
            fontSize={20}
          >
            ART UNION
          </Typography>
        )}
        <LogoContainer href={ROUTES.HOMEPAGE}>
          <Image src="/images/logo.png" fill alt="logo" />
        </LogoContainer>
        <BurgerContainer disableRipple disableFocusRipple disableTouchRipple>
          <Image src="/icons/burger.svg" fill alt="logo" />
        </BurgerContainer>
      </MaxWidthWrapper>
    </Container>
  );
};

export default Header;
