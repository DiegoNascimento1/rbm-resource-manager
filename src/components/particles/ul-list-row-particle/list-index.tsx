import React from "react";
import { StyledListRow, StyledUlListRow } from "./list-style";

//LEMBRAR DE MODIFICIAR STYLE, CORES PASSADAS DIRETAMENTE PARA O STYLED BUTTON
//BOTÃO PRINCIPAL AZUL - 'ENTRAR', 'AVANÇAR', 'ATIVAR CONTA', 'FAZER LOGIN'...
export default function ListParticleRow() {
  return (
    <>
        <StyledUlListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
            <StyledListRow>Lorem Ipsun</StyledListRow>
        </StyledUlListRow>
    </>
  );
}
