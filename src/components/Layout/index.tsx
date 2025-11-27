"use client";

import { FC, PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Container, MaxWidthWrapper } from "./styles";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <MaxWidthWrapper>
        {children}
        <Footer />
      </MaxWidthWrapper>
    </Container>
  );
};

export default Layout;
