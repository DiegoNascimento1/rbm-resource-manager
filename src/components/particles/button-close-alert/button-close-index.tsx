import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import { StyledButtonAlert } from "./button-close-style";

type ListAlertProps = {
    alert ?: boolean;
    danger ?: boolean;
    sucess ?: boolean;
    info ?: boolean;
    bell ?: boolean;
}

export default function ButtonCloseAlert(props : ListAlertProps) {
	return (<StyledButtonAlert
        alert={props.alert} 
        danger={props.danger} 
        sucess={props.sucess} 
        info={props.info} 
        bell={props.bell}>x</StyledButtonAlert>);
}
