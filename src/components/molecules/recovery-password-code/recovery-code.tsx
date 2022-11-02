import LogoSvg from "components/particles/logo-svg/logo-svg";
import sucessSvg from "../../../assets/svgs/sucess-recovery.svg";
import React from "react";
import { RecoveryCodeDiv } from "./recovery-code-style";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import InputCodeContainer from "components/atoms/code-container";


export default function RecoveryCodeContainer(){
    return (<>
        <RecoveryCodeDiv>
            <LogoSvg />
            <Spacing marginTop={"50px"}/>
            <Typography tag="h1" size="20px" fontWeight="700" color="#262424" margin="0">
                Recuperar senha
            </Typography>
            <Spacing marginTop={"10px"}/>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0">
                Insira abaixo o código enviado para o e-mail informado
            </Typography>
            <Spacing marginTop={"32px"}/>
            <InputCodeContainer/>
            <Spacing marginTop={"24px"}/>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0" decoration="underline">
                Reenviar código
            </Typography>
            <Spacing marginTop={"32px"}/>
            <ButtonParticle light text="AVANÇAR"/>    
            
        </RecoveryCodeDiv>
    </>);
}