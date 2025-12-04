import { FC } from "react";

import { type ShinyTextProps } from "./types";

import { StyledShinyText } from "./styles";

const ShinyText: FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <StyledShinyText disabled={disabled} speed={speed} className={className}>
      {text}
    </StyledShinyText>
  );
};

export default ShinyText;
