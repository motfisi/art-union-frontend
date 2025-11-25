import { FC } from "react";
import Line from "@/components/Line";
import Image from "next/image";
import { Box } from "@mui/material";
import { NAV_ITEMS } from "./Footer.const";

import { Container, Link, LogoContainer } from "./styles";

const Footer: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src="/images/big-logo.png" fill alt="big-logo" />
      </LogoContainer>
      <Box width="100%" display="flex" flexDirection="column" gap={4}>
        <Box
          width="80%"
          display="flex"
          justifyContent="space-between"
          margin="0 auto"
        >
          {NAV_ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Box>
        <Line />
      </Box>
    </Container>
  );
};

export default Footer;
