import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0 80px",

  [theme.breakpoints.down("md")]: {
    padding: "0 40px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
  },
}));

export const MaxWidthWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  minHeight: "100vh",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    maxWidth: 1280,
  },
}));
