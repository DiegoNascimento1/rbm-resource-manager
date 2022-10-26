import ButtonCloseAlert from "components/particles/button-close-alert/button-close-index";
import Typography from "components/particles/typography-particles";
import React, { useState } from "react";
import { StyledAlertDiv } from "../alert-notification-atom/alert-notification-style";


type ListAlertProps = {
    alert ?: boolean;
    danger ?: boolean;
    sucess ?: boolean;
    info ?: boolean;
    bell ?: boolean;
}

export default function AlertAtom(props: ListAlertProps) {

    return (
        <>
            <StyledAlertDiv 
            alert={props.alert} 
            danger={props.danger} 
            sucess={props.sucess} 
            info={props.info} 
            bell={props.bell}>
                <Typography tag="p">Exemplo de alerta.</Typography>
                
                <ButtonCloseAlert
                alert={props.alert} 
                danger={props.danger} 
                sucess={props.sucess} 
                info={props.info} 
                bell={props.bell} />
            </StyledAlertDiv>
        </>

    );
}

