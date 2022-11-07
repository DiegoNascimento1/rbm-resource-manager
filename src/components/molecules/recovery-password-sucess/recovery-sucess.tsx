import React from "react";
import { RecoverySucessDiv } from "./recovery-sucess-style";
import SucessContainer from "components/atoms/sucess-container/sucess-index";


export default function RecoverySucessContainer(){
    return (<>
        <RecoverySucessDiv>
            <SucessContainer type="password"/>
        </RecoverySucessDiv>
    </>);
}