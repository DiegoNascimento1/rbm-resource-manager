import ButtonCloseAlert from "components/particles/button-close-alert/button-close-index";
import React, { useState } from "react";
import { StyledAlertDiv } from "../alert-notification-atom/alert-notification-style";

type ListAlertProps = {
    color: string;
    backgroundColor: string;
}

export default function AlertAtom(props: ListAlertProps) {

    return (
        <>
            <StyledAlertDiv color={props.color} backgroundColor={props.backgroundColor}>
                <ButtonCloseAlert color={props.color}></ButtonCloseAlert>
            </StyledAlertDiv>
        </>

    );
}

