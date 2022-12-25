import { RESPONSIVE_SCREEN } from "contants/responsive-screen";
import styled from "styled-components";

export const StyledAreaContainer = styled.div`
    display: grid;
    grid-template-areas: "Datas Calendario ."
                        "Listagem Listagem MeusAgendamento";
    grid-template-rows: auto auto; 
    min-height: 64px;
    height: 64px;
    padding:19px;          

    @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: auto auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:    "Datas Calendario ."
                                "Listagem Listagem MeuaAgendamento"; 
        grid-template-rows: auto auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:    "Datas Calendario ."
                                "Listagem Listagem" 
                                "MeuaAgendamento MeuaAgendamento";
        grid-template-rows: auto auto auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
        grid-template-areas: "Datas "
                            "Calendario"
                            "Listagem"
                            "MeuaAgendamento";
        grid-template-rows:  1fr ;
        min-height: 128px;
        height: 128px;
    }
`;