import React from "react";
import { StyledListColumn, StyledUlListColumn } from "./list-style";

//LEMBRAR DE MODIFICIAR STYLE, CORES PASSADAS DIRETAMENTE PARA O STYLED BUTTON
//BOTÃO PRINCIPAL AZUL - 'ENTRAR', 'AVANÇAR', 'ATIVAR CONTA', 'FAZER LOGIN'...
export default function ListParticleColumn() {
	return (
		<>
			<StyledUlListColumn>
				<StyledListColumn>Lorem</StyledListColumn>
				<StyledListColumn>Lorem</StyledListColumn>
				<StyledListColumn>Lorem</StyledListColumn>
				<StyledListColumn>Lorem</StyledListColumn>
			</StyledUlListColumn>
		</>
	);
}
