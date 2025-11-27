"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { Typography } from "@mui/material";
import { Turn as Hamburger } from "hamburger-react";

import { useDevice } from "@/hooks";
import { ROUTES } from "@/const";
import BurgerMenu from "@/components/BurgerMenu";

import {
  Container,
  HamburgerWrapper,
  LogoContainer,
  MaxWidthWrapper,
} from "./styles";

const Header: FC = () => {
  const { isTablet } = useDevice();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams?.toString()]);

  return (
    <>
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
          <HamburgerWrapper>
            <Hamburger
              size={35}
              duration={0.35}
              toggled={isOpen}
              toggle={setIsOpen}
              label="Show menu"
            />
          </HamburgerWrapper>
        </MaxWidthWrapper>

        <BurgerMenu isOpen={isOpen} />
      </Container>
    </>
  );
};

export default Header;
