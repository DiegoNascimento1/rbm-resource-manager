import LogoSvg from "components/particles/logo-svg/logo-svg";
import sucessSvg from "../../../assets/svgs/sucess.svg";
import React from "react";
import { RecoverySucessDiv } from "./recovery-sucess-style";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";


export default function RecoverySucessContainer(){
    return (<>
        <RecoverySucessDiv>
            <LogoSvg />
            <Spacing marginTop={"104px"}/>
            <img src={sucessSvg}/>
            <Spacing marginTop={"29px"}/>
            <Typography tag="h1" size="20px" fontWeight="700" color="#262424" margin="0">
                Senha alterada!
            </Typography>
            <Spacing marginTop={"29px"}/>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0">
                Senha alterada com sucesso
            </Typography>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0">
                Faça login e acesse sua conta
            </Typography>
            <Spacing marginTop={"117px"}/>
            <ButtonParticle text="FAZER LOGIN"/>
            
        </RecoverySucessDiv>
    </>);
}