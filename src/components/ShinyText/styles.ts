import { styled } from "@mui/material";

export const StyledShinyText = styled("h1", {
  shouldForwardProp: (prop) => prop !== "disabled" && prop !== "speed",
})<{
  disabled?: boolean;
  speed?: number;
}>(({ disabled, speed }) => ({
  color: "#b5b5b5a4",
  background: `linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 60%
  )`,
  backgroundSize: "200% 100%",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  display: "inline-block",
  animation: disabled ? "none" : `shine ${speed || 5}s linear infinite`,

  "@keyframes shine": {
    "0%": {
      backgroundPosition: "100%",
    },
    "100%": {
      backgroundPosition: "-100%",
    },
  },
}));
