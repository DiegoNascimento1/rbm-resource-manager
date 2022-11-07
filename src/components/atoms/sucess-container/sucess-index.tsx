import React from "react";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import sucessSvg from "../../../assets/svgs/sucess-recovery.svg";

type SucessContainerProps = {
    type?: 'password' | 'email';
}

export default function SucessContainer(props : SucessContainerProps){

    function changeH1(){
        if(props.type === 'password'){
            return "Senha alterada!";
        }else if(props.type === 'email'){
            return "Conta ativada!";
        }else{
            return "'type={''} não declarado!'";
        }
    }

    function changeP1(){
        if(props.type === 'password'){
            return "Senha alterada com sucesso.";
        }else if(props.type === 'email'){
            return "Sua conta foi ativada. Faça login e";
        }else{
            return "'type={''} não declarado!'";
        }
    }

    function changeP2(){
        if(props.type === 'password'){
            return "Faça login e acesse sua conta.";
        }else if(props.type === 'email'){
            return "acesse sua conta.";
        }else{
            return "'type={''} não declarado!'";
        }
    }

    return (<>
        <LogoSvg />
            <Spacing marginTop={"104px"}/>
            <img src={sucessSvg}/>
            <Spacing marginTop={"29px"}/>
            <Typography tag="h1" size="20px" fontWeight="700" color="#262424" margin="0">
                {changeH1()}
            </Typography>
            <Spacing marginTop={"29px"}/>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0">
                {changeP1()}
            </Typography>
            <Typography tag="h1" size="14px" fontWeight="400" color="#262424" margin="0">
                {changeP2()}
            </Typography>
            <Spacing marginTop={"117px"}/>
            <ButtonParticle light text="FAZER LOGIN"/>
    </>)
}