import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  position: "relative",
  paddingTop: 115,

  [theme.breakpoints.down("md")]: {
    paddingTop: 92,
  },

  [theme.breakpoints.down("sm")]: {
    paddingTop: 74,
  },
}));

export const Grid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
}));

export const GridItem = styled(Box)<{ $wide?: boolean }>(({ $wide }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",

  "& img": {
    objectFit: "cover",
  },

  ...($wide && {
    gridColumn: "span 3",
    aspectRatio: "3 / 1",
  }),
}));
