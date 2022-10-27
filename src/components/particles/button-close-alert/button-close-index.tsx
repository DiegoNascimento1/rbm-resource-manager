import React, { Dispatch, ReactFragment, ReactNode } from "react";
import { useTheme } from "styled-components";
import { StyledButtonAlert } from "./button-close-style";

type ListAlertProps = {
    alert ?: boolean;
    danger ?: boolean;
    sucess ?: boolean;
    info ?: boolean;
    bell ?: boolean;
    display:ReactFragment;
    setDisplay : React.Dispatch<React.SetStateAction<string>>;
}

export default function ButtonCloseAlert(props : ListAlertProps) {

    function closeAlert(){
        props.setDisplay("none");
    }

	return (<StyledButtonAlert
        alert={props.alert} 
        danger={props.danger} 
        sucess={props.sucess} 
        info={props.info} 
        bell={props.bell} onClick={()=>closeAlert()}>x</StyledButtonAlert>);
}
