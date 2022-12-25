import { RESPONSIVE_SCREEN } from "contants/responsive-screen";
import styled from "styled-components";

export const StyledDivContainerGridArea = styled.div`
    display: grid;
    grid-template-rows: 76px auto;
    grid-template-columns: 296px auto auto auto;
    grid-template-areas: "Menu Header Header Header"
                        "Menu Aside Aside Aside";

    @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
        grid-template-columns: 1fr 3fr 3fr 3fr;
        grid-template-rows: 10vh auto;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
        grid-template-columns: 1fr 3fr 3fr 3fr;
        grid-template-rows: 10vh auto;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
        grid-template-columns: 1fr 3fr 3fr;
        grid-template-areas:    "Menu Header Header "
                                "Menu Aside Aside";
        grid-template-rows: 10vh auto;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:    "Menu Header "
                                "Menu Aside ";
        grid-template-rows: 88px auto;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
        grid-template-columns: 1fr ;
        grid-template-areas: "Header "
                            "Menu"
                            "Aside";
        grid-template-rows: auto auto auto;
    }
`;