import { Box, styled } from "@mui/material";
import LinkBase from "next/link";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 48,
  padding: "48px 0",
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 205,
  height: 75,

  [theme.breakpoints.down("md")]: {
    width: 154,
    height: 56,
  },

  [theme.breakpoints.down("sm")]: {
    width: 115,
    height: 42,
  },
}));

export const Link = styled(LinkBase)(({ theme }) => ({
  fontFamily: "var(--font-involve)",
  fontWeight: 700,
  fontSize: 16,
  textDecoration: "none",
  color: theme.palette.text.primary,
}));
