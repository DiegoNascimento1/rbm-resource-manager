import ButtonCloseAlert from "components/particles/button-close-alert/button-close-index";
import Typography from "components/particles/typography-particles";
import React, { useState } from "react";
import { StyledAlertDiv } from "../alert-notification-atom/alert-notification-style";
//svgs
import alertSVG from "../../../assets/svgs/alert.svg";
import dangerSVG from "../../../assets/svgs/danger.svg";
import sucessSVG from "../../../assets/svgs/sucess.svg";
import infoSVG from "../../../assets/svgs/info.svg";
import bellSVG from "../../../assets/svgs/bell.svg";


type ListAlertProps = {
    alert ?: boolean;
    danger ?: boolean;
    sucess ?: boolean;
    info ?: boolean;
    bell ?: boolean;
    text : string;
}

function srcSGV(props : ListAlertProps){
    if(props.alert){
        return alertSVG;
    }else if(props.danger){
        return dangerSVG;
    }else if(props.sucess){
        return sucessSVG;
    }else if(props.info){
        return infoSVG;
    }else if(props.bell){
        return bellSVG;
    }
}



export default function AlertAtom(props: ListAlertProps) {

    const [sttDisplay, setStateDisplay] = useState("flex");

    function stateDisplayNone(){
        
        console.log("Ta entrando!");
    }

    return (
        <>
            <StyledAlertDiv 
            alert={props.alert} 
            danger={props.danger} 
            sucess={props.sucess} 
            info={props.info} 
            bell={props.bell}
            display={sttDisplay}>
                <img src={srcSGV(props)} alt="Nop"/>
                <Typography tag="p">{props.text}</Typography>
                <ButtonCloseAlert
                alert={props.alert} 
                danger={props.danger} 
                sucess={props.sucess} 
                info={props.info} 
                bell={props.bell} display={sttDisplay} setDisplay={setStateDisplay}/>
            </StyledAlertDiv>
        </>

    );
}

