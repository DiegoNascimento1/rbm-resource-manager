import { StyledButton } from "./button-primary-style";

import React from "react";

type ListButtonProps = {
  text?: string;
}

export default function ButtonParticle(props : ListButtonProps) {
  return (
    <StyledButton>{props.text}</StyledButton>
  );
}
