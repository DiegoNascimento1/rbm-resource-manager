import React from "react";
import { ActivateSucessDiv } from "./activate-sucess-style";
import SucessContainer from "components/atoms/sucess-container/sucess-index";


export default function ActivateSucessContainer(){
    return (<>
        <ActivateSucessDiv>
            <SucessContainer type="email"/>
        </ActivateSucessDiv>
    </>);
}