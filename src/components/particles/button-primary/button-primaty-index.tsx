import { StyledButton } from "./button-primary-style";

import React from "react";

type ListButtonProps = {
  text: string;
}

//LEMBRAR DE MODIFICIAR STYLE, CORES PASSADAS DIRETAMENTE PARA O STYLED BUTTON
//BOTÃO PRINCIPAL AZUL - 'ENTRAR', 'AVANÇAR', 'ATIVAR CONTA', 'FAZER LOGIN'...
export default function ButtonParticle(props : ListButtonProps) {
  return (
    <StyledButton>{props.text}</StyledButton>
  );
}
