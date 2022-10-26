import { StyledButton } from "./button-primary-style";

import React from "react";

type ListButtonProps = {
  text: string;
}

//LEMBRAR DE MODIFICIAR STYLE, CORES PASSADAS DIRETAMENTE PARA O STYLED BUTTON
export default function ButtonParticle(props : ListButtonProps) {
  return (
    <StyledButton>{props.text}</StyledButton>
  );
}
