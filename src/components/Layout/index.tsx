"use client";

import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
